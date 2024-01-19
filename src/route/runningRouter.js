const {
  getRunningPage,
  searchConfByTitle,
  searchConfByVenue,
  searchConfByStartDate,
} = require("../controllers/runningController");

const express = require("express");
const router = express.Router();

router.get("/running", getRunningPage);
router.get("/running/searchTitle", searchConfByTitle);
router.get("/running/searchVenue", searchConfByVenue);
router.get("/running/searchStartDate", searchConfByStartDate);

module.exports = router;
