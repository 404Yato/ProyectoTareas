const db = require('../../../db/config');

/**
 * crea tarea
 *  @param {object} tarea Propiedades a gurdar en la tabla tarea
 * @returns {Promise<[]>} Retorna resultado de la ejecución
 */
const fnCrearTarea = async (tarea) => {
    try {

        const result = await db.sequelize.query(`select * from fn_crear_tarea(?, ?, ?, ?, ?, ?, ?, ?)`, {
            type: db.Sequelize.QueryTypes.SELECT, replacements: [
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
        return result;
    } catch (e) {
        throw e;
    }
}
module.exports = {
    fnCrearTarea
}