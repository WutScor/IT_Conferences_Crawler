const {
  getOverPage,
  //searchConfByNameAndPage,
} = require("../controllers/overController");

const express = require("express");
const router = express.Router();

router.get("/over", getOverPage);
//router.get("/over/search", searchConfByNameAndPage);

module.exports = router;
