const express = require("express");
const mongoose = require("mongoose");

const dadosRoutes = require("./rotas/dados");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/")
.then(() => {
    console.log("Banco conectado com sucesso!");
})
.catch((erro) => {
    console.log(erro);
});

// Usa as rotas
app.use(dadosRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});