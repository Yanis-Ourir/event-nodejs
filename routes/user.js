import { Router } from 'express';
import sequelize from '../config/database.js';
import User from '../models/User.js';
const router = Router();


router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
})

router.get('/:id', async (req, res) => {
    const user = await User.findOne({ where : { id: req.params.id} });
    res.send(user);
})

router.post('/', async (req, res) => {
    // RECUPERER REQ DATA POUR CREER UN USER VIA UN FORMULAIRE VUE.JS
    try {
        await User.create({
            pseudo: 'Judith Ranster',
            email: 'judith@gmail.com',
            password: 'password',
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        res.send('User created successfully');
    } catch (e) {
        console.log('error while creating user ' + e);
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const user = await User.findOne({ where : { id: req.params.id }});
        user.destroy();
        res.send('user successfully deleted');
    } catch (e) {
        throw new Error();
    }
});

export default router;