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
    roleId: DataTypes.INTEGER,
    phonenumber: DataTypes.STRING,
    positionId: DataTypes.INTEGER,
    image: DataTypes.INTEGER,
  }, {
    sequelize,
    // #sequelize paranoid: https://sequelize.org/docs/v6/core-concepts/paranoid/
    paranoid: true,
    modelName: 'User',
  });
  return User;
};