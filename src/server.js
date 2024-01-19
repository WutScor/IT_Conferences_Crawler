import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";

const cors = require("cors");

require("dotenv").config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);
connectDB();
let port = process.env.PORT || 6969;

app.listen(port, () => {
  //callback
  console.log("Backend IT Conferences Crawler is running on the port: " + port);
});

// middleware
app.use(cors());

// router
const HomeRouter = require("./route/homeRouter");
const UpcomingRouter = require("./route/upcomingRouter");
const RunningRouter = require("./route/runningRouter");
const OverRouter = require("./route/overRouter");
const PlanningRouter = require("./route/planningRouter");
//const WebRouter = require("./route/web");

// use router
app.use("/data/IT_Conferences", HomeRouter);
app.use("/data/IT_Conferences", UpcomingRouter);
app.use("/data/IT_Conferences", RunningRouter);
app.use("/data/IT_Conferences", OverRouter);
app.use("/data/IT_Conferences", PlanningRouter);
//app.use("/IT_Conferences", WebRouter);
