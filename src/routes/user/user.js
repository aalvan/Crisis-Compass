import userActions from '../../actions/user/user'
import {message} from "koa/lib/response";

exports.getAllUsers = (ctx) =>{
    ctx.body = userActions.getUsers()
    return ctx
}

exports.getUser = (ctx) => {
    const user = userActions.getUser(Number(ctx.params.id))
    if (user.length!==0) {
        ctx.body = user
        return ctx
    } else {
        ctx.status = 404
        ctx.body = {
            message: "Usuario no encontrado"
        }
    }
    
}

exports.createUser = (ctx) => {
    const body = ctx.request.body
    if (!body || Object.keys(body).length === 0) {
        ctx.status = 400
        ctx.body = { message: 'User data is missing' }
        return ctx
    }
    userActions.addUser(ctx.request.body)
    ctx.body = {status: 200,
        message: 'User was created'
    }
}

exports.deleteUser = (ctx) => {
    userActions.removeUser(ctx.params.id)
    ctx.body = {
        status: 200,
        message: " User was deleted"
    }
}