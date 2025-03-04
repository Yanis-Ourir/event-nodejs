const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/user');

app.listen(port, () => {
    console.log(`Evently listening on port ${port}`);
})


app.use('/users', userRoutes);



