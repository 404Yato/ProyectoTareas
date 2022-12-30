
const db = require('../../../db/config');

/**
 * Obtener usuario por id
 *  @param {idUser} idUser 
 * @returns {Promise<[]>} Retorna resultado de la ejecución
 */

const fnObtenerUsuarioById = async (idUser) => {
    try {

        const result = await db.sequelize.query(`select * from fn_obtener_usuario_by_id(${idUser})`, { type: db.Sequelize.QueryTypes.SELECT });
        return result;
    } catch (e) {
        throw e;
    }
}
module.exports = {
    fnObtenerUsuarioById
}