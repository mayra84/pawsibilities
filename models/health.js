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
      Health.belongsToMany(models.Image, {through:'HealthImages'})
    }
  }
  Health.init({
    mood: DataTypes.JSONB,
    physical: DataTypes.JSONB,
    activity: DataTypes.JSONB,
    notes: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Health',
  });
  return Health;
};