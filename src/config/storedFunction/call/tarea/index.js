const { fnCrearTarea } = require('./crear_tarea');
const { fnObtenerTareas } = require("./obtener_tarea");
const { fnModificarTarea } = require("./modificar_tarea");
const { fnObtenerTareasUsuario } = require('./obtener_tareas_usuario');
const { fnObtenerTareasEmisor } = require('./obtener_tareas_emisor');

module.exports = {
    fnCrearTarea,
    fnObtenerTareas,
    fnModificarTarea,
    fnObtenerTareasUsuario,
    fnObtenerTareasEmisor
}
