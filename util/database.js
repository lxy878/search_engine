// db connection
const Sequelize = require('sequelize/index');
// setup by database name, admin, password
const seq = new Sequelize('database_name', 'admin', 'database_password',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = seq;