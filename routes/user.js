import { Router } from 'express';
import User from '../models/User.js';
import bodyParser from 'body-parser';

const router = Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));


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
    const data = req.body;
    try {
        await User.create({
            pseudo: data.pseudo,
            email: data.email,
            password: data.password,
        });

        res.send('User created successfully');
    } catch (e) {
        res.send('error while creating user ' + e);
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