import userActions from '../../actions/user/user'

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
            message: "User was not found"
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

exports.updateUser = async (ctx) => {
    const userId = ctx.params.id;
    const body = ctx.request.body;

    if (!body || Object.keys(body).length === 0) {
        ctx.status = 400;
        ctx.body = { message: 'User data is missing' };
        return;
    }

    const result = await userActions.updateUser(userId, body);

    ctx.status = 200;
    ctx.body = { message: "Item was updated"};
};

exports.checkUser = async (ctx) => {

    try{
        const { email, password } = ctx.request.body;

        if (!email || !password) {
            ctx.status = 400;
            ctx.body = { message: 'Email and password are required' };
            return;
        }

        const [user, succes] = await userActions.checkUser(email, password);

        if (succes) {
            ctx.status = 200;
            ctx.body = { message: 'User authenticated', user: user };
            return ctx
        } else {
            ctx.status = 401;
            ctx.body = { message: "Invalid credentials" };
            return ctx
        }
    }catch (error){
        console.error('Error during user authentication:', error);
        ctx.status = 500;
        ctx.body = { message: 'Internal server error' };
    }

};

exports.getUserByLocation = async (ctx) => {
    const user = await userActions.userByLocation(Number(ctx.params.id))
    if (user.length!==0) {
        ctx.body = user
        return ctx
    } else {
        ctx.status = 404
        ctx.body = {
            message: "User was not found"
        }
    }
    
}