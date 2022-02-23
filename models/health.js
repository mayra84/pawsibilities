'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Health extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Health.belongsTo(models.Dog)
    }
  }
  Health.init({
    mood: DataTypes.STRING,
    physical: DataTypes.STRING,
    activity: DataTypes.STRING,
    notes: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Health',
  });
  return Health;
};