const { Sequelize } = require('sequelize')

const  { config } = require('../config/config')

const USERNAME = encodeURIComponent(config.dbUSER)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB = encodeURIComponent(config.dbName)
const HOST = encodeURIComponent(config.dbHost)
const sequelize = new Sequelize(DB, USERNAME, PASSWORD, {
    host: HOST,
    dialect: 'postgres'
})

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = { sequelize };