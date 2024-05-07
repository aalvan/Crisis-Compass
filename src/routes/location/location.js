import locationActions from '../../actions/location/location'

exports.getAllLocation = (ctx) => {
    ctx.body = locationActions.getLocations()
    return ctx
}