const bcrypt = require('bcrypt');
const Users = require("../../db/models/user.model")

exports.getUsers = async() => {
    try{
        let data = await Users.findAll({
            attributes:[
                'name',
                'id',
                'phone',
                'birthday',
                'genre',
                'assigned_location_id',
                'user_type'
            ]
        })
        return data
    }catch (error){
        console.log(error)
        return error
    }
}

exports.getUser = async (userId) => {
    try{
        let data = await Users.findByPk(userId);
        return data
    }catch (error){
        console.log(error)
        return error
    }
}

exports.removeUser = async (userId) => {
    try {
        const user = await Users.findByPk(userId);

        if (user) {
            await user.destroy();
        }
    } catch (error) {
        console.error('Error deleting user:', error);
    }
}

exports.addUser = async (dataUser) => {
    try {
        const newUser = await Users.create({
            name: dataUser.name,
            address: dataUser.address,
            phone: dataUser.phone,
            birthday: dataUser.birthday,
            genre: dataUser.genre,
            assigned_location_id: dataUser.assigned_location_id,
            user_type: dataUser.user_type,
            mail: dataUser.mail,
            password: dataUser.password
        });
        console.log('New user created:', newUser.toJSON());
    }catch (error) {
        console.error('Error creating user:', error);
    }
}

exports.updateUser = async (userId, updatedData) => {
    try {
        const user = await Users.findByPk(userId);

        if (!user) {
            console.log(`User with ID ${userId} not found`)
            return null;
        }
        await user.update(updatedData);
        console.log('User updated:', user.toJSON())
        return user;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

exports.checkUser = async (userEmail, userPassword) => {
    try {
        const user = await Users.findOne({ where: { mail: userEmail } });

        if (!user) {
            console.log(`User with email ${userEmail} not found`);
            return [null,false];
        }

        const isMatch = await bcrypt.compare(userPassword, user.password);

        if(userPassword === user.password || isMatch){
            console.log('User authenticated:', user.toJSON());
            return [user,true];
        }
        else{
            console.log('Invalid credentials');
            return [null,false];
        }

    } catch (error) {
        console.error('Error checking user:', error);
        throw error;
    }
};

exports.userByLocation = async (idLocation) => {
    try{
        let data = await Users.findAll({ where: { assigned_location_id: idLocation } });
        return data
    }catch (error){
        console.log(error)
        return error
    }
}