'use strict';
const { Model } = require('sequelize');
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
  User.init(
    {
      firstName: {
        type: DataTypes.STRING(128),
        allowNull: false,
        field: 'first_name',
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      lastName: {
        type: DataTypes.STRING(128),
        allowNull: false,
        field: 'last_name',
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      imgSrc: {
        type: DataTypes.STRING(512),
        field: 'img_src',
        defaultValue: null,
      },
      isMale: {
        type: DataTypes.BOOLEAN(),
        field: 'is_male',
      },
      email: {
        type: DataTypes.STRING(256),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          notNull: true,
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      underscored: true,
    }
  );
  return User;
};
