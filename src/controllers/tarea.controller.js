const db = require("../config/db/config");
const { fnObtenerTareas } = require("../config/storedFunction/call/tarea");

/**
 * Obtien todos los usuarios del sistema
 * @param {*} req 
 * @param {*} res 
 */
const getTareas = async (req, res) => {
    try {

        const resp = await fnObtenerTareas();

        sendOk(res, `Tareas obtenidas correctamente`, resp);

    } catch (error) {
        internalError(res, `${error.message || 'error no controlado'}`, error);
    }
}
