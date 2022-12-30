const db = require("../config/db/config")

const { fnObtenerTareas } = require("../config/storedFunction/call/tarea");
const {deleteTarea: fnEliminarTarea} = require('../config/storedFunction/call/tarea/eliminar_tarea')
const db = require("../config/db/config");
const { fnObtenerTareas } = require("../config/storedFunction/call/tarea");

/**
 * Obtien todos los usuarios del sistema
 * @param {*} req 
 * @param {*} res 
 */
const getTareas = async (req, res) => {
    try {

        const resp = await fnObtenerTareas();

        sendOk(res, `Tareas obtenidas correctamente`, resp);

    } catch (error) {
        internalError(res, `${error.message || 'error no controlado'}`, error);
    }
}
const { Tarea } = require("../model/tareaModel");
const { sendOk, internalError } = require("../utils/http");

const delTarea = async (req, res)=> {
    try{
        console.log(req.params)
        const {idTarea} = req.params
        const resp = await fnEliminarTarea(idTarea)
        console.log(resp)
        res.status('200');
        return;
    }catch(error){
        console.log(error)
    }
}



/**
 * Obtien todos los usuarios del sistema
 * @param {*} req 
 * @param {*} res 
 */
const getTareas = async (req, res) => {
    try {

        const resp = await fnObtenerTareas();

        sendOk(res, `Tareas obtenidas correctamente`, resp);

    } catch (error) {
        internalError(res, `${error.message || 'error no controlado'}`, error);
    }
}






module.exports = {
    getTareas,
    delTarea
}
