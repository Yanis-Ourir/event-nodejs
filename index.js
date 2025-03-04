import express from 'express';
import userRoutes from './routes/user.js';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Evently listening on port ${port}`);
})


app.use('/users', userRoutes);



