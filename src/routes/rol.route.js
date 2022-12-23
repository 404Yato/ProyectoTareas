const express = require('express')
const { rolController } = require('../controllers');
const { route } = require('./usuario.route');
const router = express.Router()

const defaultPath = process.env.DEFAULT_PATH_API

router.get(`/${defaultPath}/rol/obtener-roles`, rolController.getRoles);
router.post(`/${defaultPath}/rol/crear_rol`, rolController.crearRol);

module.exports = router