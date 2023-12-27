'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conferences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Conferences.init({
    Rank: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Conference: DataTypes.STRING,
    Title: DataTypes.STRING,
    Link2Conf: DataTypes.STRING,
    ImpactScore: DataTypes.FLOAT,
    StartDate: DataTypes.STRING,
    EndDate: DataTypes.STRING,
    Venue: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Conferences',
    autoIncrement: false,
    id: false,
    timestamps: false,
  });
  return Conferences;
};