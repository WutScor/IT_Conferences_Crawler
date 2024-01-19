const {
  getUpcomingPage,
  searchConfByTitle,
  searchConfByVenue,
  searchConfByStartDate,
} = require("../controllers/upcomingController");

const express = require("express");
const router = express.Router();

router.get("/upcoming", getUpcomingPage);
router.get("/upcoming/searchTitle", searchConfByTitle);
router.get("/upcoming/searchVenue", searchConfByVenue);
router.get("/upcoming/searchStartDate", searchConfByStartDate);

module.exports = router;
