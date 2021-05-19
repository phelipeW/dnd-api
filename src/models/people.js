'use strict';
const {
  Model
} = require('sequelize');

const Models = require('../models')

module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
  };
  People.init({
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
  });
  return People;
};