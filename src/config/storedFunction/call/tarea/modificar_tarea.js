const QueryReplacement = require('../../../../utils/QueryReplacement');
const db = require ('../../../db/config');

/**
 * Modificar una tarea con un id en especifico
 * @param {idTarea} params Id de la tarea a modificar
 * @param {tarea} body Propiedades a actualizar en la tabla tarea
 * @returns {Promise<[Object]>} Retorna
 
 */

const fnModificarTarea = async (idTarea, tarea) =>{
    try{                              
        const {id_emisor, ...resto} = tarea              //Desestructurar objeto "tarea" para separar"id_emisor" ya que es undefined
        const result = await db.sequelize.query(`SELECT * FROM fn_update_tarea(${QueryReplacement(resto, false)})`,{
            type: db.Sequelize.QueryTypes.SELECT, replacements: [idTarea, ...Object.values(resto)]
        })
        return result;

    }catch (e){
        throw e;
    }
}


module.exports={
    fnModificarTarea
}