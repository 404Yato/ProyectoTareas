const db = require ('../../../db/config');

/**
 * Modificar una tarea con un id en especifico
 * @returns {Promise<[Object]>} Retorna
 */

const fnModificarUsuario = async (idUser, user) =>{
    try{
        console.log("Hola " + idUser)
        console.log(user.nombre)
        const result = await db.sequelize.query(`SELECT * FROM fn_modificar_usuario(?,?,?,?,?,?,?)`,{
            type: db.Sequelize.QueryTypes.SELECT, replacements: [
                idUser,
                user.nombre,
                user.apellido,
                user.email,
                user.pass,
                user.user,
                user.rol
            ]
        })
        return result;

    }catch (e){
        throw e;
    }
}


module.exports={
    fnModificarUsuario
}