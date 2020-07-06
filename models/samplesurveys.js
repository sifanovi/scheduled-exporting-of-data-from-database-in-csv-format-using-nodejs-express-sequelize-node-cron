'use strict';
module.exports = function (sequelize, DataTypes) {

  var sampleTable = sequelize.define("samplesurveys", {


      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      column1: {
        type: DataTypes.STRING,
        allowNull: false
      },
      column2: {
        type: DataTypes.STRING,
        allowNull: false
      },
      column3: {
        type: DataTypes.STRING,
        allowNull: false
      },
      column4: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt:{
        type:DataTypes.DATE(),
        defaultValue:new Date(),
        allowNull:false,

      },
      updatedAt:{
        type:DataTypes.DATE(),
        defaultValue:new Date(),
        allowNull:false,
      }


  }, {

  })


  return sampleTable;
}
