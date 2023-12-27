import db from '../models/index'

let getHomePage = async (req, res) => {

  try {
    let data = await db.User.findAll()
    console.log(data)
    console.log('--------')
    return res.render("home.ejs", {data: JSON.stringify(data)});
  } catch (error) {
    console.log(error)
  }
  
};

let getUpcomingPage = (req, res) => {
  return res.render("upcoming.ejs");
};

let getRunningPage = (req, res) => {
  return res.render("running.ejs");
};

let getOverPage = (req, res) => {
  return res.render("over.ejs");
};

let getPlanningPage = (req, res) => {
  return res.render("planning.ejs");
};

module.exports = {
  getHomePage: getHomePage,
  getUpcomingPage: getUpcomingPage,
  getRunningPage: getRunningPage,
  getOverPage: getOverPage,
  getPlanningPage: getPlanningPage,
};
