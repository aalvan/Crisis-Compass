import Router from 'koa-router'
import users from './user/user'
import locations from './location/location'
const router = new Router()

router.get('/api/users', users.getAllUsers)
router.get('/api/user/:id', users.getUser)
router.put('/api/user/:id', users.updateUser)
router.post('/api/user', users.createUser)
router.delete('/api/user/:id', users.deleteUser)
router.post('/api/user/check', users.checkUser)
router.get('/api/userslocation/:id', users.getUserByLocation) //revisar esto

router.get('/api/locations', locations.getAllLocations)
router.get('/api/location/:id', locations.getLocation)
router.post('/api/location', locations.createLocation)
router.delete('/api/location/:id', locations.deleteLocation)

export default router