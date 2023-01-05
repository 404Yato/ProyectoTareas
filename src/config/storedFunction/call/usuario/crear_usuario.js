
const db = require('../../../db/config');

/**
 * crea usuario
 *  @param {user} body Propiedades a gurdar en la tabla usuario
 * @returns {Promise<[]>} Retorna resultado de la ejecución
 */

const fnCrearUsuario = async (user) => {
    try {

        const result = await db.sequelize.query(`select * from fn_crear_usuario(?, ?, ?, ?, ?, ?)`, {
            type: db.Sequelize.QueryTypes.SELECT, replacements: [
                user.nombre,
                user.apellido,
                user.email,
                user.pass,
                user.user,
                user.rol
            ]
        });
        return result;
    } catch (e) {
        throw e;
    }
}
module.exports = {
    fnCrearUsuario
}