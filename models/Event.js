import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';


class Event extends Model { }

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        deletedAt: {
            type: DataTypes.DATE,
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
        }
    },
    // OTHER MODELS METHODS GOES HERE
    {
        sequelize,
        paranoid: true,
        modelName: 'Event'
    }
);

Event.beforeCreate((event, options) => {
    try {
        event.createdAt = new Date();
        event.updatedAt = new Date();
    } catch (err) {
        throw new Error();
    }
});

export default Event;

