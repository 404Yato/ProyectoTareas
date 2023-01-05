
const express = require('express');
const expressListRoutes = require('express-list-routes');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

class Server {

    constructor() {

        //Variables
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.rutas = require('../routes');
        //Middleware
        this.middleware();
        //Rutas
        this.routes();
    }

    middleware() {
        this.app.use(cors());
        this.app.use(express.static(path.join(__dirname, './public')));
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true,
            limit: '50mb'
        }));
    }

    routes() {
        this.app.use("", ...Object.values(this.rutas));
    }


    listen() {
        this.app.listen(this.port, () => console.log(`Server is connected on ${this.port}`));
        console.log("************************************************************************")
        console.log("* POSSIDERE - API")
        console.log("* ENV: ", 'LOCAL')
        console.log("* ROUTES: ")
        expressListRoutes(this.app);
        console.log("************************************************************************")
    }
}


module.exports = Server;