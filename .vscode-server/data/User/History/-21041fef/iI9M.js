const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
//middleware 
app.use(bodyParser.json()); // décode le body d'une requête
const port = 12345; // Le port sur lequel votre serveur écoutera

app.post('/', (req, res) => {
  const donneesDuCorps = req.body;
  console.log(donneesDuCorps);
  res.send('Données reçues et traitées !');
});


// Route d'exemple
app.get('/', (req, res) => {
  res.send('Bonjour, ceci est un serveur web simple en utilisant Node.js et Express.js');
});

// Démarrer le serveur
app.listen(port, () => {
  console.error(`Le serveur est en écoute sur le port ${port}`);
});
