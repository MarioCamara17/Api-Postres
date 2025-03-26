const fs = require("fs");
const path = require("path");
const Postre = require("../models/Postres.models");
const imagen = require("../utils/image");

async function createPostre(req, res) {
    const postres = new Postre(req.body);

    try {
        if (req.files && req.files.imagep) {
            const imagePath = imagen.getFilePath(req.files.imagep);
            postres.imagep = imagePath;
        }
        const datos = await postres.save();
        res.status(200).send(datos);
    } catch (error) {
        res.status(500).send({ msg: "Error al crear el postre" });
        console.log(error);
    }
}

async function getPostre(req, res) {
    try {
        const buscarPostre = await Postre.find();
        res.status(200).send(buscarPostre);
    } catch (error) {
        res.status(500).send({ msg: "Error al buscar el postre" });
        console.log(error);
    }
}

async function delPostre(req, res) {
    const { id } = req.params;
    try {
        const postre = await Postre.findById(id);
        if (!postre) {
            return res.status(404).send({ msg: "Postre no encontrado" });
        }

        // Eliminar la imagen asociada si existe
        if (postre.imagep) {
            const imagePath = path.join(__dirname, "..", postre.imagep);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
                console.log(`Archivo eliminado: ${imagePath}`);
            } else {
                console.log(`Archivo no encontrado: ${imagePath}`);
            }
        }

        await Postre.findByIdAndDelete(id);
        res.status(200).send({ msg: "Postre eliminado" });
    } catch (error) {
        res.status(500).send({ msg: "Error al eliminar el postre" });
        console.log(error);
    }
}

async function updatePostre(req, res) {
    const { id } = req.params;
    const updatepostre = req.body;
    try {
        const postre = await Postre.findById(id);
        if (!postre) {
            return res.status(404).send({ msg: "Postre no encontrado" });
        }

        // Si se recibe una nueva imagen, eliminar la anterior
        if (req.files && req.files.imagep) {
            if (postre.imagep) {
                const oldImagePath = path.join(__dirname, "..", postre.imagep);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
            updatepostre.imagep = imagen.getFilePath(req.files.imagep);
        }

        await Postre.findByIdAndUpdate(id, updatepostre);
        res.status(200).send({ msg: "Postre actualizado" });
    } catch (error) {
        res.status(400).send({ msg: "Error al actualizar el postre" });
        console.log(error);
    }
}

module.exports = {
    createPostre,
    getPostre,
    delPostre,
    updatePostre
};