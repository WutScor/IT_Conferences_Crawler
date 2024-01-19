const {
  getHomePage,
  searchConfByTitle,
  searchConfByVenue,
  searchConfByStartDate,
} = require("../controllers/homeController");

const express = require("express");
const router = express.Router();

router.get("/home", getHomePage);
router.get("/home/searchTitle", searchConfByTitle);
router.get("/home/searchVenue", searchConfByVenue);
router.get("/home/searchStartDate", searchConfByStartDate);

module.exports = router;