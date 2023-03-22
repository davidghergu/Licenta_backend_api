const { Reteta } = require("../models");

module.exports = {
  async createReteta(reteta) {
    try {
      return await Reteta.create(reteta);
    } catch (err) {
      throw err;
    }
  },
  async updateReteta(reteta) {
    try {
      return await Reteta.findByIdAndUpdate(reteta._id, reteta, {
        new: true,
      });
    } catch (err) {
      throw err;
    }
  },
  async getRetetaByQuery(query) {
    try {
      return await Reteta.find(query).lean();
    } catch (err) {
      throw err;
    }
  },
};
