import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/home", homeController.getHomePage);
  router.get("/upcoming", homeController.getUpcomingPage);
  router.get("/running", homeController.getRunningPage);
  router.get("/over", homeController.getOverPage);
  router.get("/planning", homeController.getPlanningPage);
  return app.use("/", router);
};

module.exports = initWebRoutes;
