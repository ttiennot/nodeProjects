const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const mysql = require('mysql');
const port = 8080; // Le port sur lequel votre serveur écoutera

app.use(bodyParser.json());

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});
const body = `<!DOCTYPE html>
<html>
<head>
    <title>Formulaire</title>
</head>
<body>
    <form  method ="post" action ="">
        <label for="login">Login :</label>
        <input type="text" id="login" name="login">
            <button type="submit">Envoyer</button>
    </form>
</body>`
app.get('/', (req, res) => {
    res.send(body);
});

app.post('/', (req, res) => {
    const donneesDuCorps = req.body;
    console.log(donneesDuCorps);
    res.send("Données recues et traitées");
});