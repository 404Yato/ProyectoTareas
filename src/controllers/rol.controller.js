

const { obtenerRols, crearRol } = require('../config/storedFunction/call/rol');
const { sendOk, internalError } = require('../utils/http');

const getRoles = async (req, res) => {
    try {
        const resp = await obtenerRols();

        sendOk(res, `Roles encontrados correctamente`, resp);

    } catch (error) {

        internalError(res, `${error.message || 'error no controlado'}`, error);
    }
}

const crearRols = async (req, res) => {
    try {
        const [{ id_rol }] = await crearRol(req.body);

        sendOk(res, `Rol con el id ${id_rol} creado correctamente`, { id_rol });

    } catch (error) {

        internalError(res, `${error.message || 'error no controlado'}`, error);
    }

}
module.exports = {
    getRoles,
    crearRols
}