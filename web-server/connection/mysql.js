const { Sequelize } = require('sequelize');

let username =  process.env.MYSQL_USERNAME;
let password =  process.env.MYSQL_PASSWORD;
let host =  process.env.MYSQL_HOST;

const sequelize = new Sequelize('ecommerce', username, password, {
  host: host,
  dialect: 'mysql', // or 'mysql', 'sqlite', 'mssql', depending on your database
  logging: false,
});

const authenticateDB = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error('Unable to connect to the database please check your host and password');
  }
}

const closeConnection = async () => {
    try {
      await sequelize.close();
    } catch (error) {
      console.error('Unable to close db connection');
    }
  }

module.exports = { sequelize,authenticateDB,closeConnection };