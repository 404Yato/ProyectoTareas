const db = require('../../../db/config');


/**
 * crea usuario
 *  @param {tarea} body Propiedades a gurdar en la tabla usuario
 * @returns {Promise<[]>} Retorna resultado de la ejecución
 */
const fnCrearTarea = async (tarea) => {
    try {

        const result = await db.sequelize.query(`select * from fn_crear_tarea(?, ?, ?, ?, ?, ?, ?, ?)`, {
            type: db.Sequelize.QueryTypes.INSERT, replacements: [
                tarea.descripcion,
                tarea.nombre_tarea,
                tarea.fecha_inicio,
                tarea.fecha_termino,
                tarea.id_emisor,
                tarea.id_usuario,
                tarea.id_estado_tarea_id,
                tarea.id_nivel_importancia,
            ]
        });
        return result[0];
    } catch (e) {
        throw e;
    }
}
module.exports = {
    fnCrearTarea
}