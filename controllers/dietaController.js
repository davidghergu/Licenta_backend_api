const { Dieta } = require("../models");

module.exports = {
  async createDieta(dieta) {
    try {
      return await Dieta.create(dieta);
    } catch (err) {
      throw err;
    }
  },
  async updateDieta(dieta) {
    try {
      return await Dieta.findByIdAndUpdate(dieta._id, dieta, {
        new: true,
      });
    } catch (err) {
      throw err;
    }
  },
  async getDieteByQuery(query) {
    try {
      return await Dieta.find(query).populate("reteta").lean();
    } catch (err) {
      throw err;
    }
  },
};
