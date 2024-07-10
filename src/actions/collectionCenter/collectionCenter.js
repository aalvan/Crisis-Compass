const CollectionCenters = require("../../db/models/collectionCenter.model");

exports.getCollectionCenters = async() => {
    try{
        let data = await CollectionCenters.findAll({
            attributes:[
                'id',
                'name',
                'description',
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

exports.getCollectionCenter = async (CollectionCenterId) => {
    try{
        let data = await CollectionCenters.findByPk(CollectionCenterId);
        return data
    }catch (error){
        console.log(error)
        return error
    }
}

exports.removeCollectionCenter = async (CollectionCenterId) => {
    try {
        const CollectionCenter = await CollectionCenters.findByPk(CollectionCenterId);

        if (CollectionCenter) {
            await CollectionCenter.destroy();
        }
    } catch (error) {
        console.error('Error deleting CollectionCenter:', error);
    }
}

exports.addCollectionCenter = async (dataCollectionCenter) => {
    try {
        const newCollectionCenter = await CollectionCenters.create({
            name: dataCollectionCenter.name,
            CollectionCenterType: dataCollectionCenter.CollectionCenterType,
            description: dataCollectionCenter.description,
        });
        console.log('New CollectionCenter created:', newCollectionCenter.toJSON());
    }catch (error) {
        console.error('Error creating CollectionCenter:', error);
    }
}

exports.updateCollectionCenter = async (CollectionCenterId, updatedData) => {
    try {
        const CollectionCenter = await CollectionCenters.findByPk(CollectionCenterId);

        if (!CollectionCenter) {
            console.log(`CollectionCenter with ID ${CollectionCenterId} not found`)
            return null;
        }
        await CollectionCenter.update(updatedData);
        console.log('CollectionCenter updated:', CollectionCenter.toJSON())
        return CollectionCenter;
    } catch (error) {
        console.error('Error updating CollectionCenter:', error);
        throw error;
    }
};