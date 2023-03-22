const { Cereale } = require("../models");

module.exports = {
  async createCereale(cereale) {
    try {
      console.log(cereale);
      return await Cereale.create(cereale);
    } catch (err) {
      throw err;
    }
  },
  async updateCereale(cereale) {
    try {
      return await Cereale.findByIdAndUpdate(cereale._id, cereale, {
        new: true,
      });
    } catch (err) {
      throw err;
    }
  },
  async getCerealeByQuery(query) {
    try {
      return await Cereale.find(query).lean();
    } catch (err) {
      throw err;
    }
  },
};
