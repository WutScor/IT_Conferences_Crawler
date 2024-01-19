import express from "express";
import webController from "../controllers/webController";

let router = express.Router();

let initWebRoutes = (app) => {
  //router.get("/IT_Conferences", webController.getHomePage);
  router.get("/home", webController.getHomePage);
  router.get("/upcoming", webController.getUpcomingPage);
  router.get("/running", webController.getRunningPage);
  router.get("/over", webController.getOverPage);
  router.get("/planning", webController.getPlanningPage);
  return app.use("/", router);
};

module.exports = initWebRoutes;
