const express = require('express');
const { tareaController } = require('../controllers');
const router = express.Router();

const defaultPath = process.env.DEFAULT_PATH_API;

router.get(`/${defaultPath}/tarea/obtener-tarea`, tareaController.getTareas);
router.delete(`/${defaultPath}/tarea/eliminarTarea/:idTarea`, tareaController.eliminarTarea);

router.post(`/${defaultPath}/tarea/modTarea/:idTarea`, tareaController.modTarea);

module.exports = router;