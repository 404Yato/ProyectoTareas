const db = require('../../../db/config');

/**
 * Obtener todos las tareas asignadas a un usuario
 * @returns {Promise<[Object]>} Retorna un arreglo con todas las tareas de un usuario
 */

const fnObtenerTareasUsuario = async (id_usuario) => {
    try {

        const result = await db.sequelize.query(`SELECT * FROM fn_obtener_tareas_usuario(${id_usuario})`, { type: db.Sequelize.QueryTypes.SELECT });

        return result;

    } catch (e) {
        throw e;
    }
}
module.exports = {
    fnObtenerTareasUsuario
}