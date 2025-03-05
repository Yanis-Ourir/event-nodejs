import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';


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
        }
    },
    // OTHER MODELS METHODS GOES HERE
    {
        sequelize,
        paranoid: true,
        modelName: 'Event'
    }
);

export default Event;

