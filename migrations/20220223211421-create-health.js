'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Health', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mood: {
        type: Sequelize.JSONB
      },
      physical: {
        type: Sequelize.JSONB
      },
      activity: {
        type: Sequelize.JSONB
      },
      notes: {
        type: Sequelize.STRING
      },
      DogId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Dogs',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Health');
  }
};
