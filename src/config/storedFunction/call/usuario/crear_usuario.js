
const QueryReplacement = require('../../../../utils/QueryReplacement');
const db = require('../../../db/config');


/**
 * crea usuario
 *  @param {user} body Propiedades a guardar en la tabla usuario
 * @returns {Promise<[]>} Retorna resultado de la ejecución
 */

const fnCrearUsuario = async (user) => {
    try {
        const result = await db.sequelize.query(`select * from fn_crear_usuario(${QueryReplacement(user, true)})`, {
            type: db.Sequelize.QueryTypes.SELECT, replacements: Object.values(user)
        });
        return result;
    } catch (e) {
        throw e;
    }
}
module.exports = {
    fnCrearUsuario
}