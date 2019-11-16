// db connection
const Sequelize = require('sequelize/index');

const seq = new Sequelize('engine_db', 'root', 'open87855522',{
    dialect: 'mysql',
    host: 'localhost'
});



module.exports = seq;