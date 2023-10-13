// app/index.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require ('path');
const myRoutes = require ('./routes/route');
const app = express(); 
app.use(bodyParser.json());
/*app.get('/', (req, res) => {  res.send('Bienvenue sur mon application Node.js !');
});*/
const dbURL = 'mongodb://127.0.0.1:27017/bclinique';
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connecté à MongoDB');
});
// app.use(cors({
//   origin: 'http://localhost:4200' // Autorise uniquement les requêtes depuis cette origine
// }));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
)
app.use('/api', myRoutes);

app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging purposes

  // Send an error response to the client
  res.status(500).json({
    error: 'Internal Server Error',
  });
});

app.listen(8000, () => {
  console.log('Serveur en écoute sur le port 8000');
});

 

// const myRoutes = require ('./App/routes/route');





