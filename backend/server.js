// Como requerimos los paquetes y archivos sin usar módulos
// const express = require('express');
// const dotenv = require('dotenv');
// const points = require('./data/points');

//importamos los paquetes que vamos a usar
import express from 'express';
import dotenv from 'dotenv';
import points from './data/points.js';


dotenv.config(); //Inicializamos la configuración de las variables de entorno
const app = express(); //Inicializamos express - creamos un objeto de express
const PORT = process.env.PORT || 5000; //Obtenemos el puerto de la variable de entorno o 5000

//Creamos una ruta para el endpoint /  
app.get('/', (req, res) => {
    res.send('API is running!!');
});

// Creamos una ruta para el endpoint /api/points
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
        
//Inicializamos el servidor en el puerto 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));