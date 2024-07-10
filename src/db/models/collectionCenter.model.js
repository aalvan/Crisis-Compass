const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../connection');
const Location = require('./location.model');
const Item = require('./item.model');


const CollectionCenterModel = sequelize.define('collection_center', {
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
    description: {
        allowNull: true,
        type: DataTypes.TEXT
    },
    schedule:{
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
CollectionCenterModel.belongsTo(Location, {
    foreignKey: {
        allowNull: false,
        field: 'location_id',
        name: 'locationId',
        type: DataTypes.INTEGER
    },
    onDelete: 'CASCADE',
});
// Define the many-to-many relationship with Item through a junction table
CollectionCenterModel.belongsToMany(Item, {
    through: 'CollectionCenterItem', // Junction table
    foreignKey: 'collectionCenterId',
    otherKey: 'itemId',
    onDelete: 'CASCADE'
});

sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error creating database & tables:', err);
    });

module.exports = CollectionCenterModel;
