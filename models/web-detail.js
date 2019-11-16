
const Sequelize = require('sequelize/index');

const seq = require('../util/database');

const WebInfo = seq.define('webinfo',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: Sequelize.TEXT,
    url: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = WebInfo;