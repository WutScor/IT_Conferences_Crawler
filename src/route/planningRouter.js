const {
  getPlanningPage,
  //searchConfByNameAndPage,
} = require("../controllers/planningController");

const express = require("express");
const router = express.Router();

router.get("/planning", getPlanningPage);
//router.get("/planning/search", searchConfByNameAndPage);

module.exports = router;
