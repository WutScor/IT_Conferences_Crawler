const searchModel = require('../models/searchModel');

exports.getSearchResults = async (req, res) => {
  const { searchFilter, searchInput } = req.query;

  try {
    const results = await searchModel.search(searchInput, searchFilter);
    res.render('search', { results });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while searching.');
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
    getSearchResults: getSearchResults,
    getUpcomingPage: getUpcomingPage,
    getRunningPage: getRunningPage,
    getOverPage: getOverPage,
    getPlanningPage: getPlanningPage,
  };
  