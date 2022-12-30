const { fnCrearUsuario } = require('./crear_usuario');
const { fnValidarLoginUsuario } = require('./login');
const { fnObtenerUsuarios } = require('./obtener_usuarios');
const { fnObtenerUsuarioById } = require('./obtener_usuario_by_id');

module.exports = {
    fnCrearUsuario,
    fnValidarLoginUsuario,
    fnObtenerUsuarios,
    fnObtenerUsuarioById
}