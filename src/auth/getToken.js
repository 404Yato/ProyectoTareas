const http = require('../utils/http');
const jwt = require('jsonwebtoken');

// const selectUser = (key) => {
//     switch (key) {
//         case process.env.APIKEY_ADMIN:

//             return {
//                 rol: 2
//             };

//         case process.env.APIKEY_USER:

//             return {
//                 rol: 1
//             };
//         default:
//             return null;
//     }
// }


const createToken = (req, res) => {
    try {

        const { usuarioId } = req.body;

        //const whatUSer = selectUser(apiKey);

        if (!req.body.hasOwnProperty('usuarioId') || isNaN(usuarioId)) {

            return http.badRequest(res, 'Acceso denegado', [], 403);
        }

        const token = jwt.sign(req.body, process.env.SECRET_TOKEN, { expiresIn: '1h' });

        req.headers['token'] = token;

        http.sendOk(res, 'Acceso permitido', { token: token });

    } catch (error) {
        http.internalError(res, "Error interno", error.message);
    }
}

module.exports = { createToken };
