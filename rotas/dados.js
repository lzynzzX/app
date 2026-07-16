const express = require("express");

const router = express.Router();

const dadosController = require("../controllers/dadosController");

router.post("/dados", dadosController.criarUsuario);

router.get("/dados", dadosController.listarUsuarios);

module.exports = router;