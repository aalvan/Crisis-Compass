const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../connection');
const Location = require('./location.model');

const Shelter = sequelize.define('shelters', {
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
    schedule: {
        allowNull: false,
        type: DataTypes.STRING
    },
    capacity: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    maxCapacity: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'max_capacity'
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
});

// Define the one-to-one relationship with Location
Shelter.belongsTo(Location, {
    foreignKey: {
        allowNull: false,
        field: 'location_id', // the field in Shelter table
        name: 'locationId',  // the attribute name in the Shelter model
        type: DataTypes.INTEGER
    },
    onDelete: 'CASCADE',
});

sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error creating database & tables:', err);
    });

module.exports = Shelter;
