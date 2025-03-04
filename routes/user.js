import { Router } from 'express';
const router = Router();


router.get('/', (req, res) => {
    res.send('Liste des utilisateurs');
})

router.get('/:id', (req, res) => {
    res.send(`Utilisateur ${req.params.id}`);
})

router.post('/', (req, res) => {
    res.send('Créer un utilisateur');
})

router.delete('/delete/:id', (req, res) => {
    res.send(`Utilisateur ${req.params.id} supprimé`);
});

export default router;