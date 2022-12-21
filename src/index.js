require('dotenv').config();
const express = require('express');
const path = require('path');
const rutas = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const expressListRoutes = require('express-list-routes');
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.static(path.join(__dirname, './public')));

app.use(express.json({ limit: '50mb' }));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));



//routes
app.use("", ...Object.values(rutas));

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))
console.log("************************************************************************")
console.log("* POSSIDERE - API")
console.log("* ENV: ", 'LOCAL')
console.log("* ROUTES: ")
expressListRoutes(app);
console.log("************************************************************************")
