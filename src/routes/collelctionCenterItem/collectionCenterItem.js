import CollectionCenterItemActions from '../../actions/CollectionCenterItem/CollectionCenterItem'

exports.getAllCollectionCenterItems = async (ctx) => {
    ctx.body = await CollectionCenterItemActions.getCollectionCenterItems()
    return ctx
}

exports.getCollectionCenterItem = async (ctx) => {
    const CollectionCenterItem = await CollectionCenterItemActions.getCollectionCenterItem(Number(ctx.params.id))
    if (CollectionCenterItem.length!==0) {
        ctx.body = CollectionCenterItem
        return ctx
    } else {
        ctx.status = 404
        ctx.body = {
            message: "CollectionCenterItem was not found"
        }
    }

}

exports.createCollectionCenterItem = async (ctx) => {
    const body = ctx.request.body
    if (!body || Object.keys(body).length === 0) {
        ctx.status = 400
        ctx.body = { message: 'CollectionCenterItemItem data is missing' }
        return ctx
    }
    await CollectionCenterItemActions.addCollectionCenterItem(ctx.request.body)
    ctx.body = {status: 200,
        message: 'CollectionCenterItemItem was created'
    }
}

exports.deleteCollectionCenterItem = async (ctx) => {
    await CollectionCenterItemActions.removeCollectionCenterItem(ctx.params.id)
    ctx.body = {
        status: 200,
        message: " CollectionCenterItem was deleted"
    }
}

exports.updateCollectionCenterItem = async (ctx) => {
    const collectionCenterItemId = ctx.params.id;
    const body = ctx.request.body;

    if (!body || Object.keys(body).length === 0) {
        ctx.status = 400;
        ctx.body = { message: 'CollectionCenterItem data is missing' };
        return;
    }

    const result = await CollectionCenterItemActions.updateCollectionCenterItem(collectionCenterItemId, body);

    ctx.status = 200;
    ctx.body = { message: "CollectionCenterItem was updated"};
    return ctx
};