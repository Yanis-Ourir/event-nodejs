import { Router } from 'express';
import Event from '../models/Event.js';
import bodyParser from 'body-parser';

const router = Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/', async (req, res) => {
    const events = await Event.findAll();
    res.send(events);
})

router.get('/:id', async (req, res) => {
    const event = await Event.findOne({ where: { id: req.params.id } });
    res.send(event);
})

router.post('/', async (req, res) => {
    // RECUPERER REQ DATA POUR CREER UN Event VIA UN FORMULAIRE VUE.JS
    // CHOSES A REGLER ICI NOTAMMENT LA DATE 
    const data = req.body;
    try {
        await Event.create({
            name: data.name,
            description: data.description,
            date: data.date,
            image: data.image ?? null,
            UserId: data.userId,
        });

        res.send('Event created successfully');
    } catch (e) {
        res.send('error while creating Event ' + e);
    }
})

router.delete('/delete/:id', async (req, res) => {
    console.log('test');
    try {
        const event = await Event.findOne({ where: { id: req.params.id } });
        event.destroy();
        res.send('Event successfully deleted');
    } catch (e) {
        throw new Error();
    }
});

export default router;