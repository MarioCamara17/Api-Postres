const Usuario = require("../models/Usuario.models");

// Registro de usuario
async function registro(req, res) {
  try {
    const { usuario, contrasena } = req.body;
    if (!usuario || !contrasena) {
      return res.status(400).send({ msg: "Todos los campos son obligatorios" });
    }
    // Evitar duplicados
    const existe = await Usuario.findOne({ usuario });
    if (existe) {
      return res.status(400).send({ msg: "El usuario ya existe" });
    }
    const nuevoUsuario = new Usuario({ usuario, contrasena });
    await nuevoUsuario.save();
    res.status(201).send({ msg: "Usuario registrado correctamente" });
  } catch (error) {
    res.status(500).send({ msg: "Error al registrar usuario" });
  }
}

// Login de usuario
async function login(req, res) {
  try {
    const { usuario, contrasena } = req.body;
    if (!usuario || !contrasena) {
      return res.status(400).send({ msg: "Todos los campos son obligatorios" });
    }
    // Caso especial admin
    if (usuario === "admin" && contrasena === "admin") {
      return res.status(200).send({ rol: "admin" });
    }
    // Buscar usuario normal
    const user = await Usuario.findOne({ usuario, contrasena });
    if (!user) {
      return res.status(401).send({ msg: "Usuario o contraseña incorrectos" });
    }
    res.status(200).send({ rol: "usuario" });
  } catch (error) {
    res.status(500).send({ msg: "Error al iniciar sesión" });
  }
}

module.exports = {
  registro,
  login,
};