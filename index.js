const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postresRoutes = require('./routes/Postres.routes');
const usuarioRoutes = require('./routes/usuario.routes'); // <-- Importa las rutas de usuario
const {
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT,
    IP_SERVER
} = require("./Constantes");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const path = require('path');
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/api', postresRoutes);
app.use('/api/usuario', usuarioRoutes); // <-- Usa las rutas de usuario

const uri = `mongodb://${IP_SERVER}:${DB_PORT}/${DB_NAME}`;

mongoose.connect(uri)
    .then(() => console.log("Conexión a la base de datos establecida"))
    .catch(err => console.log("Error al conectar en la base de datos", err));

app.listen(port, () => {
    console.log("*******************");
    console.log("******API REST*****");
    console.log("*******************");
    console.log(`servidor en ejecucion: http://${IP_SERVER}:${port}/api`);
});