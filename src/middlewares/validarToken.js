const { badRequest } = require("../utils/http");
const jwt = require("jsonwebtoken");

const validarToken = (req, res, next) => {

  if (req.headers.hasOwnProperty('token') && req.headers.token.length > 0) {

    const token = req.headers['token'];

    jwt.verify(token, process.env.SECRET_TOKEN, (err) => {
      if (err) {
        return badRequest(res, "TOKEN INVALIDO", [], 401);
      }
      next();
    });
    return;
  }
  badRequest(res, "Token de acceso no encontrado", [], 401);

};

module.exports = {
  validarToken,
};
