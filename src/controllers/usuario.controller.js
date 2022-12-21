const db = require("../config/db/config");

const { crearUsuario: fnCrearUsuario } = require('../config/storedFunction/call/usuario/crear_usuario');

const getUsuarios = async (req, res) => {
    try {
        const resp = await db.sequelize.query(`select * from rol`, { type: db.Sequelize.QueryTypes.SELECT });
        console.log(resp)
    } catch (error) {
        console.log(error)
    }
}


const crearUsuario = async (req, res) => {
    try {

        const [{ id_usuario }] = await fnCrearUsuario(req.body);

        res.status('200').json({ id_usuario });
        return;

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getUsuarios,
    crearUsuario
}
