const CollectionCenterItems = require("../../db/models/collectionCenterItemItem.model");

exports.getCollectionCenterItems = async() => {
    try{
        let data = await CollectionCenterItems.findAll({
            attributes:[
                'id',
                'collectionCenterId',
                'itemId',
                'stock',
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

exports.getCollectionCenterItem = async (collectionCenterItemId) => {
    try{
        let data = await CollectionCenterItems.findByPk(collectionCenterItemId);
        return data
    }catch (error){
        console.log(error)
        return error
    }
}

exports.removeCollectionCenterItem = async (collectionCenterItemId) => {
    try {
        const collectionCenterItem = await CollectionCenterItems.findByPk(collectionCenterItemId);

        if (collectionCenterItem) {
            await collectionCenterItem.destroy();
        }
    } catch (error) {
        console.error('Error deleting CollectionCenterItem:', error);
    }
}

exports.addCollectionCenterItem = async (dataCollectionCenterItem) => {
    try {
        const newCollectionCenterItem = await CollectionCenterItems.create({
            name: dataCollectionCenterItem.name,
            collectionCenterId: dataCollectionCenterItem.collectionCenterId,
            itemId: dataCollectionCenterItem.itemId,
            stock: dataCollectionCenterItem.stock,
        });
        console.log('New CollectionCenterItem created:', newCollectionCenterItem.toJSON());
    }catch (error) {
        console.error('Error creating CollectionCenterItem:', error);
    }
}

exports.updateCollectionCenterItem = async (collectionCenterItemId, updatedData) => {
    try {
        const collectionCenterItem = await CollectionCenterItems.findByPk(collectionCenterItemId);

        if (!collectionCenterItem) {
            console.log(`CollectionCenterItem with ID ${collectionCenterItem} not found`)
            return null;
        }
        await collectionCenterItem.update(updatedData);
        console.log('CollectionCenterItem updated:', collectionCenterItem.toJSON())
        return collectionCenterItem;
    } catch (error) {
        console.error('Error updating CollectionCenterItem:', error);
        throw error;
    }
};