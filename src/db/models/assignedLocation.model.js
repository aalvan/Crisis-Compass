const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../connection');
const Location = require('./location.model'); // Adjust the path as needed

const AssignedLocationModel = sequelize.define('assigned_locations', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    assigned_location_type: {
        allowNull: false,
        type: DataTypes.STRING
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
AssignedLocationModel.belongsTo(Location, {
    foreignKey: {
        allowNull: false,
        field: 'location_id', // the field in AssignedLocationModel table
        name: 'locationId',  // the attribute name in the AssignedLocationModel model
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

module.exports = AssignedLocationModel;
