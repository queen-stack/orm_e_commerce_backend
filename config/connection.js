const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;

// need to update with own credentials and seed the database

sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {  
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });
module.exports = sequelize;
