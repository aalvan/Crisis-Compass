import Router from 'koa-router'
import users from './user/user'
import locations from './location/location'
import items from './item/item'
import shelters from './shelter/shelter'
const router = new Router()

// User endpoints
router.get('/api/users', users.getAllUsers)
router.get('/api/user/:id', users.getUser)
router.put('/api/user/:id', users.updateUser)
router.post('/api/user', users.createUser)
router.delete('/api/user/:id', users.deleteUser)
router.post('/api/user/check', users.checkUser)
router.get('/api/userslocation/:id', users.getUserByLocation) //revisar esto

// Location endpoints
router.get('/api/locations', locations.getAllLocations)
router.get('/api/location/:id', locations.getLocation)
router.post('/api/location', locations.createLocation)
router.delete('/api/location/:id', locations.deleteLocation)

// Item endpoints
router.get('/api/items', items.getAllItems)
router.get('/api/item/:id', items.getItem)
router.put('/api/item/:id', items.updateItem)
router.post('/api/item', items.createItem)
router.delete('/api/item/:id', items.deleteItem)

// Shelter endpoints
router.get('/api/shelters', shelters.getAllShelters)
router.get('/api/shelter/:id', shelters.getShelter)
router.put('/api/shelter/:id', shelters.updateShelter)
router.post('/api/shelter', shelters.createShelter)
router.delete('/api/shelter/:id', shelters.deleteShelter)
router.get('/api/shelterslocation/:id', shelters.getShelterByLocation)

export default router