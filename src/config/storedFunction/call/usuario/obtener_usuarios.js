const db = require('../../../db/config');

/**
 * Obtener todos los usuarios
 * @returns {Promise<[Object]>} Retorna todos los usuarios
 */

const fnObtenerUsuarios = async () => {
    try {

        const result = await db.sequelize.query(`select * from fn_obtener_usuario()`, { type: db.Sequelize.QueryTypes.SELECT });

        return result;

    } catch (e) {
        throw e;
    }
}
module.exports = {
    fnObtenerUsuarios
}