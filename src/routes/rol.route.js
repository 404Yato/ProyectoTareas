const express = require('express')
const { rolController } = require('../controllers');
const { validarToken } = require('../middlewares/validarToken');
const router = express.Router()

const defaultPath = process.env.DEFAULT_PATH_API

router.get(`/${defaultPath}/rol/obtener-roles`, rolController.getRoles);
router.post(`/${defaultPath}/rol/crear_rol`, rolController.crearRols);

module.exports = router