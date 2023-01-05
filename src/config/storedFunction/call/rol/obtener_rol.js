const db = require('../../../db/config')

const obtenerRols = async () => {
    try {
        const result = await db.sequelize.query(`select * from fn_obtener_rols()`, { type: db.Sequelize.QueryTypes.SELECT });
        return result;
    } catch (e) {
        throw e;
    }
}

module.exports = {
    obtenerRols
}