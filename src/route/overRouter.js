const {
  getOverPage,
  searchConfByTitle,
  searchConfByVenue,
  searchConfByStartDate,
} = require("../controllers/overController");

const express = require("express");
const router = express.Router();

router.get("/over", getOverPage);
router.get("/over/searchTitle", searchConfByTitle);
router.get("/over/searchVenue", searchConfByVenue);
router.get("/over/searchStartDate", searchConfByStartDate);

module.exports = router;
