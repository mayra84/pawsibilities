'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.JSONB
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
    await queryInterface.addColumn('Dogs', 'ImageId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Images',
        key: 'id'
      },
    })
    await queryInterface.createTable('HealthImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ImageId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Images',
          key: 'id'
        },
        allowNull: false
      },
      HealthId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Health',
          key: 'id'
        },
        allowNull: false
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
    await queryInterface.dropTable('HealthImages');
    await queryInterface.removeColumn('Dogs', 'ImageId')
    await queryInterface.dropTable('Images');
  }
};
