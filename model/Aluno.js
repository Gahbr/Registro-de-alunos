const Sequelize = require('sequelize')
const db = require ('../db')

const Aluno = db.define('aluno', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING(50),
        allowNull:false
    },

    age: {
        type:Sequelize.INTEGER,
        allowNull:false
    },
    email:{
        type: Sequelize.STRING(50),
        allowNull:false,
    },
    phone:{
        type: Sequelize.STRING,
        allowNull:false
    },
    gender:{
        type:Sequelize.STRING,
        allowNull:false
    },
    isStudent:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    }
})

module.exports = Aluno;

db.sync();

