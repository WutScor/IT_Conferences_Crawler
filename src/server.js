import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
const path = require('path')
//import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
const handlebars = require('express-handlebars')


const cors = require("cors");
require("dotenv").config();

let app = express();

app.set('view engine', 'hbs');

app.engine('hbs', handlebars.engine({
    layoutsDir: path.join(__dirname, 'views/layouts'),
    defaultLayout: 'index',
    extname: 'hbs',
    partialsDir: 'views/partials/'
}));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// viewEngine(app);
app.use(express.static('public'));


connectDB();
let port = process.env.PORT || 6969;


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

app.listen(port, () => {
  //callback
  console.log(`Backend IT Conferences Crawler is running on: http://localhost:${port}/IT_Conferences/home`);
});
