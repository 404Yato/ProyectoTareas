const QueryReplacement = require('../../../../utils/QueryReplacement');
const db = require('../../../db/config');

/**
 * crea tarea
 *  @param {object} tarea Propiedades a guardar en la tabla tarea
 * @returns {Promise<[]>} Retorna resultado de la ejecución
 */
const fnCrearTarea = async (tarea) => {
    try {
        const result = await db.sequelize.query(`select * from fn_crear_tarea(${QueryReplacement(tarea, true)})`, {
            type: db.Sequelize.QueryTypes.SELECT, replacements: Object.values(tarea)
        });
        return result;
    } catch (e) {
        throw e;
    }
}
module.exports = {
    fnCrearTarea
}