const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize();

const User = sequelize.define("User",{
    firstName:{
        type:DataTypes.STRING,
        allowNull:true
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:true
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    MobileNumber:{
        type:DataTypes.STRING,
        allowNull:true
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull
    },
})

module.exports = User;