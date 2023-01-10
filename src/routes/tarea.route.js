const express = require('express');
const { tareaController } = require('../controllers');
const { validBodyLength } = require('../middlewares');
const router = express.Router();

const defaultPath = process.env.DEFAULT_PATH_API;


router.get(`/${defaultPath}/tarea/obtener-tareas`, tareaController.getTareas);
router.post(`/${defaultPath}/tarea/crearTarea`, [validBodyLength],tareaController.crearTarea);
router.delete(`/${defaultPath}/tarea/eliminarTarea/:idTarea`, tareaController.eliminarTarea);

router.post(`/${defaultPath}/tarea/modTarea/:idTarea`, [validBodyLength], tareaController.modTarea);

module.exports = router;