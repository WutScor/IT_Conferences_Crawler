//const Conferences = require("../models/Conferences");
import db from "../models/index";
const moment = require("moment");
const sequelize = require("sequelize");

// let getUpcomingPage = async (req, res) => {
//   try {
//     let page = Number(req.query.page) || 1; // get the current page number from the query string

//     const pageSize = req.query.pageSize || 2; // số dòng trên 1 trang

//     console.log(page);

//     const result = await Conferences.getConferencesByPage(page, pageSize);
//     res.json(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

let getUpcomingPage = async (req, res) => {
  let page = Number(req.query.page) || 1; // get the current page number from the query string
  let limit = 10; // limit number of conferences viewed
  let offset = (page - 1) * limit; // where to select from db

  try {
    const currentDate = new Date();
    const formattedCurrentDate = moment(currentDate).format("YYYY-MM-DD");

    const data = await db.Conferences.findAll({
      where: sequelize.literal(
        `STR_TO_DATE(StartDate, '%d-%m-%Y') > '${formattedCurrentDate}'`
      ),
      limit: limit,
      offset: offset,
    });

    let totalItems = await db.Conferences.count({
      where: sequelize.literal(
        `STR_TO_DATE(StartDate, '%d-%m-%Y') > '${formattedCurrentDate}'`
      ),
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

const searchConfByTitle = async (req, res, next) => {
  try {
    let page = Number(req.query.page) || 1; // get the current page number from the query string
    let limit = 10; // limit number of conferences viewed
    let offset = (page - 1) * limit; // where to select from db
    const searchValue = String(req.query.name);

    const data = await db.Conferences.findAll({
      where: sequelize.literal(`
      LOWER(Title) LIKE LOWER('%${searchValue}%') AND STR_TO_DATE(StartDate, '%d-%m-%Y') > '${formattedCurrentDate}'
      `),
      limit: limit,
      offset: offset,
    });

    let totalItems = await db.Conferences.count({
      where: sequelize.literal(`
      LOWER(Title) LIKE LOWER('%${searchValue}%') AND STR_TO_DATE(StartDate, '%d-%m-%Y') > '${formattedCurrentDate}'
      `),
    }); // total records of db
    let totalPages = Math.ceil(totalItems / limit);

    res.json({
      data: JSON.parse(JSON.stringify(data)),
      totalPages: totalPages,
      currentPage: page,
      totalConf: totalItems,
    });
  } catch (error) {
    console.log(error);
  }
};

const searchConfByVenue = async (req, res, next) => {
  try {
    let page = Number(req.query.page) || 1; // get the current page number from the query string
    let limit = 10; // limit number of conferences viewed
    let offset = (page - 1) * limit; // where to select from db
    const searchValue = String(req.query.name);
    console.log('Search Value:', searchValue);
    const data = await db.Conferences.findAll({
      where: sequelize.literal(`
      LOWER(Venue) LIKE LOWER('%${searchValue}%') AND STR_TO_DATE(StartDate, '%d-%m-%Y') > '${formattedCurrentDate}'
      `),
      limit: limit,
      offset: offset,
    });

    let totalItems = await db.Conferences.count({
      where: sequelize.literal(`
      LOWER(Venue) LIKE LOWER('%${searchValue}%') AND STR_TO_DATE(StartDate, '%d-%m-%Y') > '${formattedCurrentDate}'
      `),
    }); // total records of db
    let totalPages = Math.ceil(totalItems / limit);

    res.json({
      data: JSON.parse(JSON.stringify(data)),
      totalPages: totalPages,
      currentPage: page,
      totalConf: totalItems,
    });
  } catch (error) {
    console.log(error);
  }
};

const searchConfByStartDate = async (req, res, next) => {
  try {
    let page = Number(req.query.page) || 1; // get the current page number from the query string
    let limit = 10; // limit number of conferences viewed
    let offset = (page - 1) * limit; // where to select from db
    const searchValue = String(req.query.name);
    console.log('Search Value:', searchValue); // Log the searchValue

    const data = await db.Conferences.findAll({
      where: sequelize.literal(`StartDate = '${searchValue}' AND STR_TO_DATE(StartDate, '%d-%m-%Y') > '${formattedCurrentDate}'`),
      limit: limit,
      offset: offset,
    });

    let totalItems = await db.Conferences.count({
      where: sequelize.literal(`StartDate = '${searchValue}' AND STR_TO_DATE(StartDate, '%d-%m-%Y') > '${formattedCurrentDate}'`),
    }); // total records of db
    let totalPages = Math.ceil(totalItems / limit);

    res.json({
      data: JSON.parse(JSON.stringify(data)),
      totalPages: totalPages,
      currentPage: page,
      totalConf: totalItems,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUpcomingPage: getUpcomingPage,
  searchConfByTitle: searchConfByTitle,
  searchConfByVenue: searchConfByVenue,
  searchConfByStartDate: searchConfByStartDate,
};


