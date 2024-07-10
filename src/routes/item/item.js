import itemActions from '../../actions/Item/Item'

exports.getAllItems = async (ctx) => {
    ctx.body = await itemActions.getItems()
    return ctx
}

exports.getItem = async (ctx) => {
    const Item = await itemActions.getItem(Number(ctx.params.id))
    if (Item.length!==0) {
        ctx.body = Item
        return ctx
    } else {
        ctx.status = 404
        ctx.body = {
            message: "Item was not found"
        }
    }

}

exports.createItem = async (ctx) => {
    const body = ctx.request.body
    if (!body || Object.keys(body).length === 0) {
        ctx.status = 400
        ctx.body = { message: 'Item data is missing' }
        return ctx
    }
    await itemActions.addItem(ctx.request.body)
    ctx.body = {status: 200,
        message: 'Item was created'
    }
}

exports.deleteItem = async (ctx) => {
    await itemActions.removeItem(ctx.params.id)
    ctx.body = {
        status: 200,
        message: " Item was deleted"
    }
}

exports.updateItem = async (ctx) => {
    const itemId = ctx.params.id;
    const body = ctx.request.body;

    if (!body || Object.keys(body).length === 0) {
        ctx.status = 400;
        ctx.body = { message: 'Item data is missing' };
        return;
    }

    const result = await itemActions.updateItem(itemId, body);

    ctx.status = 200;
    ctx.body = { message: "Item was updated"};
    return ctx
};