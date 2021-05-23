const Sequelize = require("sequelize");
const db = require("./../db");
module.exports = db.define('users', {
        full_name: {
            type: Sequelize.STRING,
            allowNull: false
        },

        username: {
            type: Sequelize.STRING,
            allowNull: false
        },

        passwordHash: {
            type: Sequelize.STRING,
            allowNull: false
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    })