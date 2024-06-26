const { Sequelize, DataTypes} = require('sequelize')
const { sequelize } = require('../connection')

const Location = sequelize.define('locations', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        address: {
            allowNull: false,
            type: DataTypes.STRING
        },
        region:{
            allowNull: false,
            type: DataTypes.STRING
        },
        city:{
            allowNull: false,
            type: DataTypes.STRING
        },
        locationType:{
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: true
    });

sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error creating database & tables:', err);
    });

module.exports = Location;