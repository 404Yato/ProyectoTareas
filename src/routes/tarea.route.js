const express = require('express');
const { tareaController } = require('../controllers');
const router = express.Router();

const defaultPath = process.env.DEFAULT_PATH_API;

router.delete(`/${defaultPath}/tarea/delTarea/:idTarea`, tareaController.delTarea);
router.get(`/${defaultPath}/tarea/obtener-Tarea`, tareaController.getTareas);


module.exports = router;