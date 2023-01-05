const db = require('../../../db/config')

const crearRol = async (body) => {
    try {
        const result = await db.sequelize.query(`select * from fn_crear_rol(?)`, {
            type: db.Sequelize.QueryTypes.SELECT, replacements: [
                body.rol
            ]
        });
        return result
    } catch (e) {
        throw e;
    }
}
module.exports = {
    crearRol
}