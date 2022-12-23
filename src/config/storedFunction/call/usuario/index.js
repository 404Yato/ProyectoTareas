const { fnCrearUsuario } = require('./crear_usuario');
const { fnValidarLoginUsuario } = require('./login');
const { fnObtenerUsuarios } = require('./obtener_usuarios');

module.exports = {
    fnCrearUsuario,
    fnValidarLoginUsuario,
    fnObtenerUsuarios
}