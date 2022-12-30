const express = require('express');
const { tareaController } = require('../controllers');
const router = express.Router();

const defaultPath = process.env.DEFAULT_PATH_API;

router.delete(`/${defaultPath}/tarea/delTarea/:idTarea`, tareaController.delTarea);


module.exports = router;