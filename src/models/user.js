'use strict';
const {
  Model
// eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    typeRole: DataTypes.STRING,
    keyRole: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};