const express = require("express");
const UsuarioController = require("../controllers/usuario.controller");

const router = express.Router();

router.post("/registro", UsuarioController.registro);
router.post("/login", UsuarioController.login);

module.exports = router;