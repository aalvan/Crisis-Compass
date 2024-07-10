import shelterActions from '../../actions/Shelter/Shelter'

exports.getAllShelters = async (ctx) => {
    ctx.body = await shelterActions.getShelters()
    return ctx
}

exports.getShelter = async (ctx) => {
    const shelter = await shelterActions.getShelter(Number(ctx.params.id))
    if (shelter.length!==0) {
        ctx.body = shelter
        return ctx
    } else {
        ctx.status = 404
        ctx.body = {
            message: "Shelter was not found"
        }
    }

}

exports.createShelter = async (ctx) => {
    const body = ctx.request.body
    if (!body || Object.keys(body).length === 0) {
        ctx.status = 400
        ctx.body = { message: 'Shelter data is missing' }
        return ctx
    }
    await shelterActions.addShelter(ctx.request.body)
    ctx.body = {status: 200,
        message: 'Shelter was created'
    }
}

exports.deleteShelter = async (ctx) => {
    await shelterActions.removeShelter(ctx.params.id)
    ctx.body = {
        status: 200,
        message: " Shelter was deleted"
    }
}

exports.updateShelter = async (ctx) => {
    const shelterId = ctx.params.id;
    const body = ctx.request.body;

    if (!body || Object.keys(body).length === 0) {
        ctx.status = 400;
        ctx.body = { message: 'Shelter data is missing' };
        return;
    }

    const result = await shelterActions.updateShelter(shelterId, body);

    ctx.status = 200;
    ctx.body = { message: "Shelter was updated"};
    return ctx
};

exports.getShelterByLocation = async (ctx) => {
    const shelter = await shelterActions.shelterByLocation(Number(ctx.params.id))
    if (shelter.length!==0) {
        ctx.body = shelter
        return ctx
    } else {
        ctx.status = 404
        ctx.body = {
            message: "Shelter was not found"
        }
    }

}