const {
  getHomePage,
  //searchConfByNameAndPage,
} = require("../controllers/homeController");

const express = require("express");
const router = express.Router();

router.get("/home", getHomePage);
//router.get("/home/search", searchConfByNameAndPage);

module.exports = router;
