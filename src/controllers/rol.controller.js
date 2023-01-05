

const { obtenerRols, fnCrearRol } = require('../config/storedFunction/call/rol');
const { sendOk } = require('../utils/http');

const getRoles = async (req, res) => {
    try {
        const resp = await obtenerRols();

        sendOk(res, `Roles encontrados correctamente`, resp);

    } catch (error) {
        console.log(error)
        internalError(res, `${error.message || 'error no controlado'}`, error);
    }
}

const crearRol = async (req, res) => {
    try {
        const [{ id_rol }] = await fnCrearRol(req.body);

        sendOk(res, `Rol con el id ${id_rol} creado correctamente`, { id_rol });

        return;
    } catch (error) {
        console.log(error.message)
        internalError(res, `${error.message || 'error no controlado'}`, error);
    }

}
module.exports = {
    getRoles,
    crearRol
}