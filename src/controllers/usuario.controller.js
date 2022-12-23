const db = require("../config/db/config");

const { fnCrearUsuario, fnValidarLoginUsuario, fnObtenerUsuarios } = require('../config/storedFunction/call/usuario');
const { sendOk, internalError } = require("../utils/http");

/**
 * Obtien todos los usuarios del sistema
 * @param {*} req 
 * @param {*} res 
 */
const getUsuarios = async (req, res) => {
    try {

        const resp = await fnObtenerUsuarios();

        sendOk(res, `Usuarios obtenidos correctamente`, resp);

    } catch (error) {
        internalError(res, `${error.message || 'error no controlado'}`, error);
    }
}

/**
 * 
 * @param {String} req Se obtiene el nombre, apellido, email, pass,userName y rolId del body
 * @param {Any} res Respuesta del servicio
 * @returns {Promise<[Any]>} Retorna el id_usuario
 */
const crearUsuario = async (req, res) => {
    try {

        const [{ id_usuario }] = await fnCrearUsuario(req.body);

        sendOk(res, `Usuario ${id_usuario} ha sido creado correctamente`, { id_usuario });

    } catch (error) {

        internalError(res, `${error.message || 'error no controlado'}`, error);
    }
}

/**
 * Validar login usuario
 * @param {String} req Se obtiene el username y pass del body
 * @param {*} res 
 * @returns Retorna los datos del usuario logeado
 */
const validarLoginUsuario = async (req, res) => {
    try {
        const { username, pass } = req.body

        const result = await fnValidarLoginUsuario(username, pass);

        sendOk(res, `Usuario logeado correctamente`, ...result);

    } catch (error) {
        internalError(res, `${error.message || 'error no controlado'}`, error);
    }
}

module.exports = {
    getUsuarios,
    crearUsuario,
    validarLoginUsuario
}
