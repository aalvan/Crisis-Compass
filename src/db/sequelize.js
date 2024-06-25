const { Sequelize } = require('sequelize')

const  { config } = require('../config/config')

const USER = encodeURIComponent(config.dbUSER)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.db_Port}/${config.db_Name}`

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true,
});

module.exports = sequelize;