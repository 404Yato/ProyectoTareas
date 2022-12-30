const db = require("../config/db/config")

const {deleteTarea: fnEliminarTarea} = require('../config/storedFunction/call/tarea/eliminar_tarea')

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
module.exports = {
    delTarea
}