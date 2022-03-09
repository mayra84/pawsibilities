'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.hasMany(models.Dog)
      Image.belongsToMany(models.Health, {through:'HealthImages', onDelete: 'CASCADE'})
    }
  }
  Image.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    data: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};