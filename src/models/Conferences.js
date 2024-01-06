//import db from "../models/index";
const db = require("../models/index");
("use strict");
const { Model } = require("sequelize");

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

    static async getConferencesByPage(page, pageSize) {
      try {
        const offset = (page - 1) * pageSize;
        const limit = pageSize;

        let data = await db.Conferences.findAll({
          limit: limit,
          offset: offset,
        });

        let totalItems = await db.Conferences.count(); // total records of db
        let totalPages = Math.ceil(totalItems / limit);

        return {
          data: JSON.parse(JSON.stringify(data)),
          totalPages: totalPages,
          currentPage: page,
        };
      } catch (error) {
        console.error("Error in getConferencesByPage:", error);
        throw error;
      }
    }
  }
  Conferences.init(
    {
      Rank: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      Conference: DataTypes.STRING,
      Title: DataTypes.STRING,
      Link2Conf: DataTypes.STRING,
      ImpactScore: DataTypes.FLOAT,
      StartDate: DataTypes.STRING,
      EndDate: DataTypes.STRING,
      Venue: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Conferences",
      autoIncrement: false,
      id: false,
      timestamps: false,
    }
  );
  return Conferences;
};
