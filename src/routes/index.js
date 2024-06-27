import Router from 'koa-router'
import users from './user/user'
import locations from './location/location'
const router = new Router()

router.get('/api/users', users.getAllUsers)
router.get('/api/user/:id', users.getUser)
router.post('/api/user', users.createUser)
router.delete('/api/user/:id', users.deleteUser)
router.get('/api/locations', locations.getAllLocations)

export default router