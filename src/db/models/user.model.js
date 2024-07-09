const { Sequelize, DataTypes} = require('sequelize')
const { sequelize } = require('../connection')
const Location = require('./location.model');
const bcrypt = require('bcrypt');



const User = sequelize.define('users', {
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
    phone: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    birthday: {
        allowNull: false,
        type: DataTypes.DATE
    },
    genre: {
        allowNull: false,
        type: DataTypes.STRING
    },
    mail: {
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    assigned_location_id: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    user_type: {
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
}, {
    timestamps: true,
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        },
        beforeUpdate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    }
});
// Define the relationship
User.belongsTo(Location, { foreignKey: 'locationId' });
sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error creating database & tables:', err);
    });

module.exports = User;