const express = require('express');
const multiparty = require('connect-multiparty');
const PostreController = require('../controllers/postres.controller');

const md_mparty = multiparty({ uploadDir: "./uploads" }); // Configuración de connect-multiparty

const api = express.Router();

api.post("/createpostre", [md_mparty], PostreController.createPostre); // Middleware para manejar imágenes
api.get("/getpostre", PostreController.getPostre);
api.delete("/delpostre/:id", PostreController.delPostre);
api.patch("/updatepostre/:id", [md_mparty], PostreController.updatePostre); // Middleware para manejar imágenes

// Nueva ruta para cargar múltiples postres
api.post("/loadpostres", PostreController.loadPostres);

module.exports = api;


