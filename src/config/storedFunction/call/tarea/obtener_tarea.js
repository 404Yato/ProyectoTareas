const db = require('../../../db/config');

/**
 * Obtener todos las tareas
 * @returns {Promise<[Object]>} Retorna todos los usuarios
 */

const fnObtenerTareas = async () => {
    try {

        const result = await db.sequelize.query(`select * from fn_obtener_tarea()`, { type: db.Sequelize.QueryTypes.SELECT });

        return result;

    } catch (e) {
        throw e;
    }
}
module.exports = {
    fnObtenerTareas
}