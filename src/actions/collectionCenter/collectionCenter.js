const CollectionCenters = require("../../db/models/collectionCenter.model");

exports.getCollectionCenters = async() => {
    try{
        let data = await CollectionCenters.findAll({
            attributes:[
                'id',
                'name',
                'description',
                'schedule',
                'locationId',
                'createdAt',
                'updatedAt'
            ]
        })
        return data
    }catch (error){
        console.log(error)
        return error
    }
}

exports.getCollectionCenter = async (collectionCenterId) => {
    try{
        let data = await CollectionCenters.findByPk(collectionCenterId);
        return data
    }catch (error){
        console.log(error)
        return error
    }
}

exports.removeCollectionCenter = async (collectionCenterId) => {
    try {
        const collectionCenter = await CollectionCenters.findByPk(collectionCenterId);

        if (collectionCenter) {
            await collectionCenter.destroy();
        }
    } catch (error) {
        console.error('Error deleting CollectionCenter:', error);
    }
}

exports.addCollectionCenter = async (dataCollectionCenter) => {
    try {
        const newCollectionCenter = await CollectionCenters.create({
            name: dataCollectionCenter.name,
            description: dataCollectionCenter.description,
            schedule: dataCollectionCenter.schedule,
            locationId: dataCollectionCenter.locationId
        });
        console.log('New CollectionCenter created:', newCollectionCenter.toJSON());
    }catch (error) {
        console.error('Error creating CollectionCenter:', error);
    }
}

exports.updateCollectionCenter = async (collectionCenterId, updatedData) => {
    try {
        const collectionCenter = await CollectionCenters.findByPk(collectionCenterId);

        if (!collectionCenter) {
            console.log(`CollectionCenter with ID ${collectionCenterId} not found`)
            return null;
        }
        await collectionCenter.update(updatedData);
        console.log('CollectionCenter updated:', collectionCenter.toJSON())
        return collectionCenter;
    } catch (error) {
        console.error('Error updating CollectionCenter:', error);
        throw error;
    }
};