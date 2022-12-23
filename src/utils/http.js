/**
 * 
 * @param {*} res Respuesta controlador
 * @param {String} message Mensaje de respuesta personalizado
 * @param {Array||Object} result Resultado controlador personalizado
 * @param {*} code Código de respuesta 
 * @returns {object} Salida de servicio
 */
const sendOk = (res, message, result, code = 200) => {
    return res.status(code).json({
        status: true,
        message,
        response: result,
    });
}

/**
 * 
 * @param {*} res Respuesta controlador
 * @param {String} message Mensaje de respuesta personalizado
 * @param {[]} result Resultado controlador personalizado
 * @param {*} code Código de respuesta 
 * @returns {object} Salida de servicio
 */
const badRequest = (res, message, result, code = 400) => {
    return res.status(code).json({
        status: false,
        message,
        response: result
    });
}
/**
 * 
 * @param {*} res Respuesta controlador
 * @param {String} message Mensaje de respuesta personalizado
 * @param {[]} result Resultado controlador personalizado
 * @param {*} code Código de respuesta 
 * @returns {object} Salida de servicio
 */
const internalError = (res, message, result, code = 500) => {
    return res.status(code).json({
        status: false,
        message,
        response: result
    });
}

module.exports = {
    sendOk,
    badRequest,
    internalError
}
