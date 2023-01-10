const { badRequest } = require("../utils/http");

const validBodyLength = (req, res, next) => {
    try {

        if(Object.keys(req.body).length === 0) throw new Error("Body Vacio")
        next();
    } catch (error) {

        badRequest(res, error.message, {body: req.body})

    }
}

module.exports = validBodyLength;