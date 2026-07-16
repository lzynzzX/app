const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({

    nome: String,

    idade: Number

});

module.exports = mongoose.model("Usuario", UsuarioSchema);