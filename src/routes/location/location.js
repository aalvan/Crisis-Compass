import locationActions from '../../actions/location/location'

exports.getAllLocations = async (ctx) => {
    ctx.body = await locationActions.getLocations()
    return ctx
}