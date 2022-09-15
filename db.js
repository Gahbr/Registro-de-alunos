const Sequelize = require('sequelize')

const sequelize = new Sequelize('javagama','root', 'mysql', {
    dialect:'mysql',
    host:'localhost',
    port:3306
});

module.exports = sequelize;
