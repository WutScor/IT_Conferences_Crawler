import db from "../models/index";

let getPlanningPage = async (req, res) => {
  let page = Number(req.query.page) || 1; // get the current page number from the query string
  let limit = 10; // limit number of conferences viewed
  let offset = (page - 1) * limit; // where to select from db

  try {
    let data = await db.Conferences.findAll({
      limit: limit,
      offset: offset,
    });

    let totalItems = await db.Conferences.count(); // total records of db
    let totalPages = Math.ceil(totalItems / limit);

    res.json({
      data: JSON.parse(JSON.stringify(data)),
      totalPages: totalPages,
      currentPage: page,
      totalConf: totalItems,
    });
    //return res.sendFile(__dirname + "/../views/upcoming.html");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPlanningPage: getPlanningPage,
};
