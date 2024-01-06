const {
  getUpcomingPage,
  //searchConfByNameAndPage,
} = require("../controllers/upcomingController");

const express = require("express");
const router = express.Router();

router.get("/upcoming", getUpcomingPage);
//router.get("/upcoming/search", searchConfByNameAndPage);

module.exports = router;
