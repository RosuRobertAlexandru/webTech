const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.locals.cars = [
    { name: 'a', color: 'red' },
    { name: 'b', color: 'blue' }
];

app.get('/cars', (req, res) => {
    res.status(200).json(app.locals.cars);
});

app.delete('/cars/:name', (req, res) => {
    const { name } = req.params;
    app.locals.cars = app.locals.cars.filter((e) => e.name !== name);
    res.status(202).json({ message: 'accepted' });
});

module.exports = app;