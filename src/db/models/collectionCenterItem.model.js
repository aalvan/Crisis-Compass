const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../connection');

const CollectionCenterItemModel = sequelize.define('collection_center_items', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    collectionCenterId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    itemId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    stock: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0
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

sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error creating database & tables:', err);
    });

module.exports = CollectionCenterItemModel;
