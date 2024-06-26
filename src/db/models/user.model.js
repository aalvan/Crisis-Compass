const { Model, Sequelize, DataTypes} = require('sequelize')
const { sequelize } = require('../connection')
const USER_TABLE = 'users'

const User = sequelize.define('user' , {

    id:{
        allowNull: false,
        primaryKey: true,
        types:DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    address:{
        allowNull: false,
        type:DataTypes.STRING,
    },
    phone: {
        allowNull: false,
        type:DataTypes.INTEGER
    },
    birthday: {
        allowNull:false,
        type: DataTypes.DATE
    },
    genre: {
        allowNull: false,
        type: DataTypes.STRING
    },
    assigned_location_id:{
        allowNull: false,
        type:DataTypes.INTEGER
    },
    user_type:{
        allowNull: false,
        type:DataTypes.BOOLEAN
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
});
module.exports = User