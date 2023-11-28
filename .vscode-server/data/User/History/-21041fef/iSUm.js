const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const port = 12345; // Le port sur lequel votre serveur écoutera

// Route d'exemple
app.get('/', (req, res) => {
  res.send('Bonjour, ceci est un serveur web simple en utilisant Node.js et Express.js');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});
