const express = require('express');
const { usuarioController } = require('../controllers');
const {validBodyLength} = require('../middlewares');

//const { getUsuarios } = require('../controllers');
const router = express.Router();

const defaultPath = process.env.DEFAULT_PATH_API;

router.get(`/${defaultPath}/usuario/obtener-usuarios`, usuarioController.getUsuarios);
router.get(`/${defaultPath}/usuario/obtener-usuario-by-id/:idUser`, usuarioController.obtenerUsuarioById);
router.post(`/${defaultPath}/usuario/crear-usuario`, [validBodyLength], usuarioController.crearUsuario);
router.post(`/${defaultPath}/usuario/validar-login-usuario`, [validBodyLength], usuarioController.validarLoginUsuario);

module.exports = router;