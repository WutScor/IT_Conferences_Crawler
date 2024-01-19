const {
  getHomePage,
  searchConfByTitle,
} = require("../controllers/homeController");

const express = require("express");
const router = express.Router();

router.get("/home", getHomePage);
router.get("/home/searchTitle", searchConfByTitle);

module.exports = router;
