import db from "../models/index";

let getHomePage = async (req, res) => {
  let page = Number(req.query.page) || 1; // get the current page number from the query string
  let limit = 20; // limit number of conferences viewed
  let offset = (page - 1) * limit; // where to select from db

  try {
    let data = await db.Conferences.findAll({
      limit: limit,
      offset: offset,
    });

    let totalItems = await db.Conferences.count(); // total records of db
    let totalPages = Math.ceil(totalItems / limit);

    res.render("home", {
      data: JSON.parse(JSON.stringify(data)),
      totalPages: totalPages,
      currentPage: page,
    });
  } catch (error) {
    console.log(error);
  }
};

let getUpcomingPage = (req, res) => {
  return res.render("upcoming");
};

let getRunningPage = (req, res) => {
  return res.render("running");
};

let getOverPage = (req, res) => {
  return res.render("over");
};

let getPlanningPage = (req, res) => {
  return res.render("planning");
};

module.exports = {
  getHomePage: getHomePage,
  getUpcomingPage: getUpcomingPage,
  getRunningPage: getRunningPage,
  getOverPage: getOverPage,
  getPlanningPage: getPlanningPage,
};
