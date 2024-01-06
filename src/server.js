import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
//import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";

const cors = require("cors");

require("dotenv").config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
//initWebRoutes(app);
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

// use router
app.use("/IT_Conferences", HomeRouter);
app.use("/IT_Conferences", UpcomingRouter);
app.use("/IT_Conferences", RunningRouter);
app.use("/IT_Conferences", OverRouter);
app.use("/IT_Conferences", PlanningRouter);
