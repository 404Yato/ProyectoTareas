const { Sequelize } = require('sequelize');

const database = process.env.DB_NAME;
const host = process.env.DB_HOST;
const userDb = process.env.DB_USERNAME;
const userPass = process.env.DB_PASSWORD;
const dialectDb = process.env.DB_DIALECT;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(database, userDb, userPass, {
    host: host,
    port: port,
    dialect: dialectDb,
    dialectOptions: {
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: true,
        freezeTableName: true
    },
});

//checking if connection is done
sequelize.authenticate().then(() => {
    console.log(`Database connected to discover`)
}).catch((err) => {
    console.log(err)
})
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db;