import Sequelize from "sequelize";
import db from "./../db.js";

const User = db.define('users', {
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

export default User;