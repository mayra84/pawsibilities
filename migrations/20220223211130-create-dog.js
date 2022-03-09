'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      breed: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.INTEGER
      },
      size: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      temperament: {
        type: Sequelize.STRING
      },
      coat: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER, 
        references: {
          model: 'Users',
          key: 'id'
        },
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
    await queryInterface.dropTable('Dogs');
  }
};