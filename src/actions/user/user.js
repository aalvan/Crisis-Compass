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
            user_type: dataUser.user_type
        });
        console.log('New user created:', newUser.toJSON());
    }catch (error) {
        console.error('Error creating user:', error);
    }
}
