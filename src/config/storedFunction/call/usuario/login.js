const db = require('../../../db/config');

/**
 * Valida el usuario logeado
 * @param {String} username Nombre de usuario a validar
 * @param {String} pass contraseña a validar
 * @returns {Promise<[Object]>} Retorna los datos del usuario validado
 */

const fnValidarLoginUsuario = async (username, pass) => {
    try {

        const result = await db.sequelize.query(`select * from fn_validar_usuario(?, ?)`, {
            type: db.Sequelize.QueryTypes.SELECT, replacements: [username, pass]
        });
        return result;
    } catch (e) {
        throw e;
    }
}
module.exports = {
    fnValidarLoginUsuario
}