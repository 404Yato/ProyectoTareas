const db = require('../../../db/config');

/**
 * crea usuario
 *  @param {object} body Propiedades a gurdar en la tabla usuario
 * @returns {Promise<[]>} Retorna resultado de la ejecución
 */

const fnCrearUsuario = async (body) => {
    try {

        const result = await db.sequelize.query(`select * from fn_crear_usuario(?, ?, ?, ?, ?, ?)`, {
            type: db.Sequelize.QueryTypes.INSERT, replacements: [
                body.nombre,
                body.apellido,
                body.email,
                body.pass,
                body.user,
                body.rol
            ]
        });
        return result[0];
    } catch (e) {
        throw e;
    }
}
module.exports = {
    fnCrearUsuario
}