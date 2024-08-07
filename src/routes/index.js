import Router from 'koa-router'
import users from './user/user'
import locations from './location/location'
import items from './item/item'
import shelters from './shelter/shelter'
import collectionCenters from "./collectionCenter/collectionCenter"
import collectionCenterItems from "./collelctionCenterItem/collectionCenterItem"
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
router.put('/api/location/:id', locations.updateLocation)
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

// CollectionCenter endpoints
router.get('/api/collectioncenters', collectionCenters.getAllCollectionCenters)
router.get('/api/collectioncenter/:id', collectionCenters.getCollectionCenter)
router.put('/api/collectioncenter/:id', collectionCenters.updateCollectionCenter)
router.post('/api/collectioncenter', collectionCenters.createCollectionCenter)
router.delete('/api/collectioncenter/:id', collectionCenters.deleteCollectionCenter)
//router.get('/api/shelterslocation/:id', collectionCenters.getCollectionCentersByLocation)

// CollectionCenterItem endpoints
router.get('/api/collectioncentersitems', collectionCenterItems.getAllCollectionCenterItems)
router.get('/api/collectioncentersitem/:id', collectionCenterItems.getCollectionCenterItem)
router.put('/api/collectioncentersitem/:id', collectionCenterItems.updateCollectionCenterItem)
router.post('/api/collectioncentersitem', collectionCenterItems.createCollectionCenterItem)
router.delete('/api/collectioncentersitem/:id', collectionCenterItems.deleteCollectionCenterItem)
export default router