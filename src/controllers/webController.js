let getHomePage = (req, res) => {
  return res.render("home.ejs");
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

module.exports = {
  getHomePage: getHomePage,
  getUpcomingPage: getUpcomingPage,
  getRunningPage: getRunningPage,
  getOverPage: getOverPage,
};
