const express = require('express');
const multiparty = require('connect-multiparty');

const PostreController = require('../controllers/postres.controller');

const md_mparty = multiparty({ uploadDir: "./uploads" });
const api = express.Router();

api.post("/createpostre", [md_mparty], PostreController.createPostre);

api.get("/getpostre", PostreController.getPostre);

api.delete("/delpostre/:id", PostreController.delPostre);

api.patch("/updatepostre/:id", [md_mparty], PostreController.updatePostre);

module.exports = api;


