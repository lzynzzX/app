const Usuario = require("../modelo/Usuario");

// POST
const criarUsuario = async (req, res) => {

    try {

        const usuario = new Usuario({

            nome: req.body.nome,

            idade: req.body.idade

        });

        await usuario.save();

        res.status(201).json({

            mensagem: "Usuário salvo com sucesso!",

            usuario

        });

    }

    catch (erro) {

        res.status(500).json({

            mensagem: "Erro ao salvar usuário.",

            erro: erro.message

        });

    }

};

// GET
const listarUsuarios = async (req, res) => {

    try {

        const usuarios = await Usuario.find();

        res.status(200).json(usuarios);

    }

    catch (erro) {

        res.status(500).json({

            mensagem: "Erro ao buscar usuários.",

            erro: erro.message

        });

    }

};

module.exports = {

    criarUsuario,

    listarUsuarios

};