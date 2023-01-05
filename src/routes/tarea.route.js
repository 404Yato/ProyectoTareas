const express = require('express');
const { tareaController } = require('../controllers');
const router = express.Router();

const defaultPath = process.env.DEFAULT_PATH_API;


router.get(`/${defaultPath}/tarea/obtener-tareas`, tareaController.getTareas);
router.post(`/${defaultPath}/tarea/crearTarea`, tareaController.crearTarea);
router.delete(`/${defaultPath}/tarea/delTarea/:idTarea`, tareaController.delTarea);


module.exports = router;