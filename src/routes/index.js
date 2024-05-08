import Router from 'koa-router'
import users from './user/user'

const router = new Router()

router.get('/api/users', users.getAllUsers)
router.get('/api/user/:id', users.getUser)
router.post('/api/user', users.createUser)
router.delete('/api/user/:id', users.deleteUser)

export default router