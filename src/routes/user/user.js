import userActions from '../../actions/user/user'
import {message} from "koa/lib/response";

exports.getAllUsers = async (ctx) =>{
    ctx.body = await userActions.getUsers()
    return ctx
}

exports.getUser = async (ctx) => {
    const user = await userActions.getUser(Number(ctx.params.id))
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

exports.createUser = async (ctx) => {
    const body = ctx.request.body
    if (!body || Object.keys(body).length === 0) {
        ctx.status = 400
        ctx.body = { message: 'User data is missing' }
        return ctx
    }
    await userActions.addUser(ctx.request.body)
    ctx.body = {status: 200,
        message: 'User was created'
    }
}

exports.deleteUser = async (ctx) => {
    await userActions.removeUser(ctx.params.id)
    ctx.body = {
        status: 200,
        message: " User was deleted"
    }
}