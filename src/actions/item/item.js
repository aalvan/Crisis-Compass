const Items = require("../../db/models/item.model");

exports.getItems = async() => {
    try{
        let data = await Items.findAll({
            attributes:[
                'id',
                'name',
                'description',
                'itemType',
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

exports.getItem = async (itemId) => {
    try{
        let data = await Items.findByPk(itemId);
        return data
    }catch (error){
        console.log(error)
        return error
    }
}

exports.removeItem = async (itemId) => {
    try {
        const item = await Items.findByPk(itemId);

        if (item) {
            await item.destroy();
        }
    } catch (error) {
        console.error('Error deleting Item:', error);
    }
}

exports.addItem = async (dataItem) => {
    try {
        const newItem = await Items.create({
            name: dataItem.name,
            itemType: dataItem.itemType,
            description: dataItem.description,
        });
        console.log('New item created:', newItem.toJSON());
    }catch (error) {
        console.error('Error creating item:', error);
    }
}

exports.updateItem = async (itemId, updatedData) => {
    try {
        const item = await Items.findByPk(itemId);

        if (!item) {
            console.log(`Item with ID ${itemId} not found`)
            return null;
        }
        await item.update(updatedData);
        console.log('Item updated:', item.toJSON())
        return item;
    } catch (error) {
        console.error('Error updating Item:', error);
        throw error;
    }
};