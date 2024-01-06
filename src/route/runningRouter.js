const {
  getRunningPage,
  //searchConfByNameAndPage,
} = require("../controllers/runningController");

const express = require("express");
const router = express.Router();

router.get("/running", getRunningPage);
//router.get("/running/search", searchConfByNameAndPage);

module.exports = router;
