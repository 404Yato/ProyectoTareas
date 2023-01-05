const db = require ('../../../db/config');

/**
 * Modificar una tarea con un id en especifico
 * @returns {Promise<[Object]>} Retorna
 */

const fnModificarTarea = async (idTarea, tarea) =>{
    try{
        console.log("Hola " + idTarea)
        console.log(tarea.id_estado_tarea)
        const result = await db.sequelize.query(`SELECT * FROM fn_update_tarea(?,?,?,?,?,?,?,?)`,{
            type: db.Sequelize.QueryTypes.SELECT, replacements: [
                idTarea,
                tarea.descripcion,
                tarea.nombre_tarea,
                tarea.fecha_inicio,
                tarea.fecha_termino,
                tarea.id_usuario,
                tarea.id_estado_tarea,
                tarea.id_nivel_importancia
            ]
        })
        return result;

    }catch (e){
        throw e;
    }
}


module.exports={
    fnModificarTarea
}