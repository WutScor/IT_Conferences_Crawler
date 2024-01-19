const { Op } = require('sequelize');
const db = require('../models/index');

class SearchModel {
  static async search(searchInput, searchFilter) {
    try {
      const results = await db.Conferences.findAll({
        where: {
          [searchFilter]: {
            [Op.like]: `%${searchInput}%`
          }
        }
      });

      return results;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = SearchModel;