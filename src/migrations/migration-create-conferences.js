'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Conferences', {
      Rank: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Conference: {
        type: Sequelize.STRING
      },
      Title: {
        type: Sequelize.STRING
      },
      Link2Conf:{
        type: Sequelize.STRING
      },
      ImpactScore: {
        type: Sequelize.FLOAT
      },
      StartDate: {
        type: Sequelize.STRING
      },
      EndDate: {
        type: Sequelize.STRING
      },
      Venue: {
        type: Sequelize.STRING
      }
    },
    {
        timestamps: false,
    }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Conferences');
  }
};