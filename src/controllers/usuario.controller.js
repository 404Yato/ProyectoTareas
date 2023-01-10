const db = require("../config/db/config");

const { fnCrearUsuario, fnValidarLoginUsuario, fnObtenerUsuarios, fnObtenerUsuarioById, fnEliminarUsuario} = require('../config/storedFunction/call/usuario');
const { fnModificarUsuario } = require("../config/storedFunction/call/usuario/modificar_usuario");
const { User } = require("../model/userModel");
const { sendOk, internalError } = require("../utils/http");

/**
 * Obtien todos los usuarios del sistema
 * @param {*} req 
 * @param {*} res 
 */
const getUsuarios = async (req, res) => {
    try {
        const resp = await db.sequelize.query(`select * from usuario`, { type: db.Sequelize.QueryTypes.SELECT });
        console.log(resp)
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

        const user = new User(req.body);

        const [{ id_usuario }] = await fnCrearUsuario(user);

        sendOk(res, `Usuario ${id_usuario} ha sido creado correctamente`, { id_usuario });

    } catch (error) {

        internalError(res, `${error.message || 'error no controlado'}`, error);
    }
}

const eliminarUsuario = async (req, res) => {
    try {
        const { idUser } = req.params

        const [{ fn_eliminar_usuario: id_user }] = await fnEliminarUsuario(idUser)

        sendOk(res, `Usuario con el id ${idUser} eliminado`, id_user);

    } catch (error) {
        console.log(error);
        internalError(res, `${error.message || 'error no controlado'}`, error);
    }
}

const modUsuario = async (req,res) =>{
    try {
        const { idUser } = req.params
        const user = new User(req.body)
        const [{ id_user }] = await fnModificarUsuario(idUser,user)
        console.log(id_user)
        sendOk(res,`Usuario ${ id_user } ha sido modificado correctamente`, { id_user })
    } catch (error) {
        console.log(error)
    }
}
/**
 * Validar login usuario
 * @param {String} req Se obtiene el userName y pass del body
 * @param {*} res 
 * @returns Retorna los datos del usuario logeado
 */
const validarLoginUsuario = async (req, res) => {
    try {

        const { userName, password } = req.body

        const result = await fnValidarLoginUsuario(userName, password);

        sendOk(res, `Usuario logeado correctamente`, ...result);

    } catch (error) {
        internalError(res, `${error.message || 'error no controlado'}`, error);
    }
}


const obtenerUsuarioById = async (req, res) => {
    try {

        const { idUser } = req.params

        const result = await fnObtenerUsuarioById(idUser);

        sendOk(res, `Usuario con el id ${idUser} encontrado correctamente`, ...result);

    } catch (error) {
        internalError(res, `${error.message || 'error no controlado'}`, error);
    }
}


module.exports = {
    getUsuarios,
    crearUsuario,
    validarLoginUsuario,
    obtenerUsuarioById,
    eliminarUsuario,
    modUsuario
}
