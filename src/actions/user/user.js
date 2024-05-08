let users = []

exports.getUsers = () => {
    return users
}

exports.getUser = (userId) => {
    users = users.filter((user) => {
        return user.id === userId
    })
    return users
}

exports.removeUser = (userId) => {
    users = users.filter((user) => {
        return user.id !== Number(userId)
    })
    return users
}

exports.addUser = (dataUser) => {
    const user = {
        id: dataUser.id,
        name: dataUser.name,
        address: dataUser.address,
        phone: dataUser.phone,
        age: dataUser.age,
        genre: dataUser.genre,
        assignedLocationId: dataUser.assignedLocationId,
        type: dataUser.type
    }
    users.push(user)
}
