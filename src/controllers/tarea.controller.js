const db = require("../config/db/config")

const {deleteTarea: fnEliminarTarea} = require('../config/storedFunction/call/tarea/eliminar_tarea')

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
    }catch(error){
        console.log(error)
    }
}
module.exports = {
    eliminarTarea,
    getTareas
}