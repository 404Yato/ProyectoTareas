const db = require("../config/db/config")

const { fnObtenerTareas, fnModificarTarea } = require("../config/storedFunction/call/tarea");
const { deleteTarea: fnEliminarTarea } = require('../config/storedFunction/call/tarea/eliminar_tarea')
const { Tarea } = require("../model/tareaModel");
const { sendOk, internalError } = require("../utils/http");

const getTareas = async (req,res)=> {
    try{
        const resp = await db.sequelize.query(`select * from tarea`, {type: db.Sequelize.QueryTypes.SELECT});
        console.log(resp)
    }catch (error){
        console.log(error)
    }
}

const eliminarTarea = async (req, res)=> {
    try{
        const {idTarea} = req.params
        const resp = await fnEliminarTarea(idTarea)
        
        console.log(resp)
        res.status('200');
        return;
    } catch (error) {
        console.log(error)
    }
}

/**
 * Modifica una tarea
 * @param {*} req 
 * @param {*} res 
 */
const modTarea = async(req, res) => {
    try {
        const {idTarea} = req.params
        const tarea = new Tarea(req.body)
        const [{id_tarea}] = await fnModificarTarea(idTarea, tarea)
        console.log(id_tarea)
        sendOk(res, `Tarea ${id_tarea} ha sido modificada correctamente`, { id_tarea });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    eliminarTarea,
    getTareas,
    modTarea
}
