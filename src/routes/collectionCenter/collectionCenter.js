import collectionCenterActions from '../../actions/collectionCenter/CollectionCenter'

exports.getAllCollectionCenters = async (ctx) => {
    ctx.body = await collectionCenterActions.getCollectionCenters()
    return ctx
}

exports.getCollectionCenter = async (ctx) => {
    const collectionCenter = await collectionCenterActions.getCollectionCenter(Number(ctx.params.id))
    if (collectionCenter.length!==0) {
        ctx.body = collectionCenter
        return ctx
    } else {
        ctx.status = 404
        ctx.body = {
            message: "CollectionCenter was not found"
        }
    }

}

exports.createCollectionCenter = async (ctx) => {
    const body = ctx.request.body
    if (!body || Object.keys(body).length === 0) {
        ctx.status = 400
        ctx.body = { message: 'CollectionCenter data is missing' }
        return ctx
    }
    await collectionCenterActions.addCollectionCenter(ctx.request.body)
    ctx.body = {status: 200,
        message: 'CollectionCenter was created'
    }
}

exports.deleteCollectionCenter = async (ctx) => {
    await collectionCenterActions.removeCollectionCenter(ctx.params.id)
    ctx.body = {
        status: 200,
        message: " CollectionCenter was deleted"
    }
}

exports.updateCollectionCenter = async (ctx) => {
    const collectionCenterId = ctx.params.id;
    const body = ctx.request.body;

    if (!body || Object.keys(body).length === 0) {
        ctx.status = 400;
        ctx.body = { message: 'CollectionCenter data is missing' };
        return;
    }

    const result = await collectionCenterActions.updateCollectionCenter(collectionCenterId, body);

    ctx.status = 200;
    ctx.body = { message: "CollectionCenter was updated"};
    return ctx
};