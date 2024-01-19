import express from "express";
const handlebars = require('express-handlebars')
// let configViewEngine = (app) => {
//   //arrow function
//   app.use(express.static("./src/public"));
//   app.set("view engine", "html");
//   app.set("views", "./src/views");
// };
let configViewEngine = (app) => {
  app.set('view engine', 'hbs');

  app.engine('hbs', handlebars.engine({
      layoutsDir:`views/layouts/`,
      defaultLayout: 'index',
      extname: 'hbs',
      partialsDir: 'views/partials/'
  }));
}

module.exports = configViewEngine;
