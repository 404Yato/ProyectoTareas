const Server = require('./model/serverModel');
require('dotenv').config();
const init = new Server();
init.listen();

