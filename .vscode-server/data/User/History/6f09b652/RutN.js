// a) Intégrer le module express
const express = require('express');
const bodyParser = require('body-parser');
//middleware 
app.use(bodyParser.json()); // décode le body d'une requête
app.post('/', (req, res) => {
    const donneesDuCorps = req.body;
    console.log(donneesDuCorps);
    res.send('Données reçues et traitées !');
  });
  
  // b) Créer une instance d'express
  const app = express();
  const os = require('os');
  // c) Déterminer une variable pour le port
  const port = 1235; // Vous pouvez choisir n'importe quel numéro de port que vous préférez
  
  // d) Faire une route pour intercepter la racine du site en GET sur l'instance d'express
  app.get('/', (req, res) => {
      // e) Coder la fonction fléchée de la route, elle doit juste afficher un message
      res.send('Bonjour, ceci est le server Express node.js de : <br><b>Thibaut</b></br>');
  });


// Gestionnaire d'erreurs global
process.on('uncaughtException', (err) => {
    console.error(`Une erreur non capturée s'est produite : ${err.message}`);
    process.exit(1); // 1 signifie une sortie avec une erreur
  });
  // Démarrer le serveur
const server = app.listen(port, () => {
    //console.log(os.networkInterfaces());
    console.log(`Serveur est en écoute sur      
                  ${os.networkInterfaces()['ens18'][0].address}:${port}`);
  });
  

