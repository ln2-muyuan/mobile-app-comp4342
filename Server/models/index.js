// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('FYP', 'root', '12345', {
//     host: 'localhost',
//     port: 3306,
//     dialect: 'mysql',
//   });

// async function testConnection() {
//     try {
//         await sequelize.authenticate();
//         console.log('Database connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error.message);
//     }
// }

// testConnection();

// const models = {};
// models.sequelize = sequelize;
// models.User = require("./user.model.js")(sequelize);

// module.exports = models;