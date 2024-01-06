import db from "../models/index";
const moment = require("moment");
const sequelize = require("sequelize");

let getOverPage = async (req, res) => {
  let page = Number(req.query.page) || 1; // get the current page number from the query string
  let limit = 10; // limit number of conferences viewed
  let offset = (page - 1) * limit; // where to select from db

  try {
    const currentDate = new Date();
    const formattedCurrentDate = moment(currentDate).format("YYYY-MM-DD");

    const data = await db.Conferences.findAll({
      where: sequelize.literal(`
      STR_TO_DATE(EndDate, '%d-%m-%Y') < '${formattedCurrentDate}'
      `),
      limit: limit,
      offset: offset,
    });

    let totalItems = await db.Conferences.count({
      where: sequelize.literal(`
      STR_TO_DATE(EndDate, '%d-%m-%Y') < '${formattedCurrentDate}'
        `),
    }); // total records of db
    let totalPages = Math.ceil(totalItems / limit);

    res.json({
      data: JSON.parse(JSON.stringify(data)),
      totalPages: totalPages,
      currentPage: page,
      totalConf: totalItems,
    });
    //return res.sendFile(__dirname + "/../views/upcoming.html");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getOverPage: getOverPage,
};
