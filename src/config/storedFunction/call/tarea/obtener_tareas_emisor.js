const db = require('../../../db/config');

/**
 * Obtener todos las tareas que correspondan a un usuario emisor
 * @returns {Promise<[Object]>} Retorna un arreglo con todas las tareas de un usuario
 */

const fnObtenerTareasEmisor = async (id_emisor) => {
    try {

        const result = await db.sequelize.query(`SELECT * FROM fn_obtener_tareas_emisor(${id_emisor})`, { type: db.Sequelize.QueryTypes.SELECT });

        return result;

    } catch (e) {
        throw e;
    }
}
module.exports = {
    fnObtenerTareasEmisor
}