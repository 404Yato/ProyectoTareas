
const db = require('../../../db/config');

/**
 * eliminar usuario
 *  @param {Number} idUser Propiedades a gurdar en la tabla usuario
 * @returns
 */

const fnEliminarUsuario = async (idUser) => {
    try {

        const result = await db.sequelize.query(`SELECT * FROM fn_eliminar_usuario(${idUser})`, {
            type: db.Sequelize.QueryTypes.DELETE
        });
        return result;
    } catch (e) {
        throw e;
    }
}
module.exports = {
    fnEliminarUsuario
}