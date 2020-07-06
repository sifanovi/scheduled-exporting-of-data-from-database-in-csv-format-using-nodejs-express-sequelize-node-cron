'use strict';

module.exports = {
  up:   (queryInterface, Sequelize) => {
    return queryInterface.createTable('samplesurveys', {


      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      column1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      column2: {
        type: Sequelize.STRING,
        allowNull: false
      },
      column3: {
        type: Sequelize.STRING,
        allowNull: false
      },
      column4: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt:{
        type:Sequelize.DATE(),
        defaultValue:new Date(),
        allowNull:false,

      },
      updatedAt:{
        type:Sequelize.DATE(),
        defaultValue:new Date(),
        allowNull:false,
      }


    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('samplesurveys');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
