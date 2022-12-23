const db = require("../config/db/config")

const { crearRol: fnCrearRol } = require ('../config/storedFunction/call/rol/crear_rol')

const getRoles = async (req,res)=> {
    try{
        const resp = await db.sequelize.query(`select * from rol`, {type: db.Sequelize.QueryTypes.SELECT});
        console.log(resp)
    }catch (error){
        console.log(error)
    }
}

const crearRol = async (req, res) => {
    try{
        const [{id_rol}] = await fnCrearRol(req.body);

        res.status('200').json({id_rol});
        return;
    }catch (error){
        console.log(error.message)
    }

}
module.exports = {
    getRoles,
    crearRol
}