import { Router } from 'express';
import sequelize from '../config/database.js';
import User from '../models/User.js';
const router = Router();


router.get('/', async (req, res) => {
    const [users, metadata] = await sequelize.query('SELECT * FROM users');
    console.log(metadata);
    res.send(users);
})

router.get('/:id', async (req, res) => {
    const [users, metadata] = await sequelize.query(`SELECT * FROM users WHERE id = ${req.params.id}`);
    res.send(users);
})

router.post('/', async (req, res) => {
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

router.delete('/delete/:id', (req, res) => {
    res.send(`Utilisateur ${req.params.id} supprimé`);
});

export default router;