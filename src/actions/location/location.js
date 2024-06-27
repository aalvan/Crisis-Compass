const Locations = require("../../db/models/location.model")

exports.getLocations = async() => {
    try{
        let data = await Locations.findAll({
            attributes:[
                'id',
                'name',
                'address',
                'region',
                'city',
                'locationType',
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