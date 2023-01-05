const db = require('../../../db/config');

/**
 * 
 * @param {Number} idTarea 
 * @returns 
 */
const deleteTarea = async (idTarea) => {
    try {
        const result = await db.sequelize.query(`SELECT * FROM fn_delete_tarea(${idTarea})`, {
            type: db.Sequelize.QueryTypes.DELETE
        });
        return result;
    } catch (e) {
        throw e;
    }
}
module.exports = {
    deleteTarea
}