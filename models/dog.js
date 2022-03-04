'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dog.belongsTo(models.User)
      Dog.hasMany(models.Health)
      Dog.belongsTo(models.Image)
    }
  }
  Dog.init({
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    size: DataTypes.STRING,
    age: DataTypes.INTEGER,
    temperament: DataTypes.STRING,
    coat: DataTypes.STRING,
    bio: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Dog',
  });
  return Dog;
};