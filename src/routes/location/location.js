import locationActions from '../../actions/location/location'

exports.getAllLocations = async (ctx) => {
    ctx.body = await locationActions.getLocations()
    return ctx
}

exports.getLocation = async (ctx) => {
    const location = await locationActions.getLocation(Number(ctx.params.id))
    if (location.length!==0) {
        ctx.body = location
        return ctx
    } else {
        ctx.status = 404
        ctx.body = {
            message: "Location was not found"
        }
    }

}

exports.createLocation = async (ctx) => {
    const body = ctx.request.body
    if (!body || Object.keys(body).length === 0) {
        ctx.status = 400
        ctx.body = { message: 'Location data is missing' }
        return ctx
    }
    await locationActions.addLocation(ctx.request.body)
    ctx.body = {status: 200,
        message: 'Location was created'
    }
}

exports.deleteLocation = async (ctx) => {
    await locationActions.removeLocation(ctx.params.id)
    ctx.body = {
        status: 200,
        message: " Location was deleted"
    }
}