import sequelize from "./database.js";
import User from '../models/User.js';
import Event from '../models/Event.js';


Event.belongsTo(User);

User.hasMany(Event, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

User.sync();
Event.sync();
