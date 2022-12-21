const express = require('express');
const { usuarioController } = require('../controllers');
//const { getUsuarios } = require('../controllers');
const router = express.Router();

const defaultPath = process.env.DEFAULT_PATH_API;

router.get(`/${defaultPath}/usuario/obtener-usuario`, usuarioController.getUsuarios);
router.post(`/${defaultPath}/usuario/crear-usuario`, usuarioController.crearUsuario);

module.exports = router;