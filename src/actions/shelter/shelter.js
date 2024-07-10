const Shelters = require("../../db/models/shelter.model");

exports.getShelters = async() => {
    try{
        let data = await Shelters.findAll({
            attributes:[
                'id',
                'name',
                'schedule',
                'capacity',
                'maxCapacity',
                'createdAt',
                'updatedAt',
                'locationId'
            ]
        })
        return data
    }catch (error){
        console.log(error)
        return error
    }
}

exports.getShelter = async (shelterId) => {
    try{
        let data = await Shelters.findByPk(shelterId);
        return data
    }catch (error){
        console.log(error)
        return error
    }
}


exports.removeShelter = async (shelterId) => {
    try {
        const shelter = await Shelters.findByPk(shelterId);

        if (shelter) {
            await shelter.destroy();
        }
    } catch (error) {
        console.error('Error deleting Shelter:', error);
    }
}

exports.addShelter = async (dataShelter) => {
    try {
        const newShelter = await Shelters.create({
            name: dataShelter.name,
            schedule: dataShelter.schedule,
            capacity: dataShelter.capacity,
            maxCapacity: dataShelter.maxCapacity,
            locationId: dataShelter.locationId
        });
        console.log('New Shelter created:', newShelter.toJSON());
    }catch (error) {
        console.error('Error creating Shelter:', error);
    }
}

exports.updateShelter = async (shelterId, updatedData) => {
    try {
        const shelter = await Shelters.findByPk(shelterId);

        if (!shelter) {
            console.log(`Shelter with ID ${shelter} not found`)
            return null;
        }
        await shelter.update(updatedData);
        console.log('Shelter updated:', shelter.toJSON())
        return shelter;
    } catch (error) {
        console.error('Error updating Shelter:', error);
        throw error;
    }
};

exports.shelterByLocation = async (idLocation) => {
    try{
        //REVISAR
        let data = await Shelters.findOne({ where: { locationId: idLocation } });
        return data
    }catch (error){
        console.log(error)
        return error
    }
}