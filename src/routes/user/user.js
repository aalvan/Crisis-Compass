import userActions from '../../actions/user/user'
import {message} from "koa/lib/response";

exports.getAllUsers = (ctx) =>{
    ctx.body = userActions.getUsers()
    return ctx
}

exports.getUser = (ctx) => {
    ctx.body = userActions.getUser(Number(ctx.params.id))
    return ctx
}

exports.createUser = (ctx) => {
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