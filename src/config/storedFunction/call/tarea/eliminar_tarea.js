const db = require ('../../../db/config');

const deleteTarea = async (idTarea) =>{
    try{
        const result = await db.sequelize.query(`SELECT public.fn_delete_tarea(${idTarea})`,{
            type: db.Sequelize.QueryTypes.DELETE
        })
    }catch (e){
        throw e;
    }
}
module.exports={
    deleteTarea
}