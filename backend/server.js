const { randomBytes } = require('crypto');
const express = require('express');
const points = require('./data/points');

const app = express();

app.get('/', (req, res) => {
    res.send('API is running!!');
});

app.get('/api/points', (req, res) => {
    res.json(points);
});

app.get('/api/points/:id', (req, res) => {
    const playerPoints = points.find(p => p.player === parseInt(req.params.id));
    res.json(playerPoints);
});

app.get('/api/getResult', (req, res) => {
    const result = Math.random() * 100;
    points.map(p => {
        p.result = Math.abs(p.points - result);
    });
    let positions = points.sort((b, a) => b.result - a.result); 

    res.json([result, positions]);
    //const winner = points.find(p => p.points = result);
    //res.json(result);
});
        

app.listen(5000, console.log('Server running on port 5000'));