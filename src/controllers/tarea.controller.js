const { fnObtenerTareas, fnCrearTarea, fnModificarTarea } = require("../config/storedFunction/call/tarea");
const { deleteTarea: fnEliminarTarea } = require('../config/storedFunction/call/tarea/eliminar_tarea')
const { Tarea } = require("../model/tareaModel");
const { sendOk, internalError } = require("../utils/http");


const crearTarea = async (req, res) => {
    try {

        const tar = new Tarea(req.body);
        const [{ id_tarea }] = await fnCrearTarea(tar);

        sendOk(res, `Tarea con el id ${id_tarea} creada correctamente`, { id_tarea });

    } catch (error) {

        internalError(res, `${error.message || 'error no controlado'}`, error);
    }
}

/**
 * Obtien todos las tareas del sistema
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

const eliminarTarea = async (req, res) => {
    try {
        const { idTarea } = req.params

        const [{ fn_delete_tarea: id_tarea }] = await fnEliminarTarea(idTarea)

        sendOk(res, `Tarea con el id ${idTarea} eliminada`, id_tarea);

    } catch (error) {
        console.log(error);
        internalError(res, `${error.message || 'error no controlado'}`, error);
    }
}

/**
 * Modifica una tarea
 * @param {*} req 
 * @param {*} res 
 */
const modTarea = async (req, res) => {
    try {
        const { idTarea } = req.params
        const tarea = new Tarea(req.body)
        const [{ id_tarea }] = await fnModificarTarea(idTarea, tarea)
        console.log(id_tarea)
        sendOk(res, `Tarea ${id_tarea} ha sido modificada correctamente`, { id_tarea });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    crearTarea,
    getTareas,
    eliminarTarea,
    modTarea
}
