const { Angajat } = require("../models");

module.exports = {
  async createAngajat(angajat) {
    try {
      return await Angajat.create(angajat);
    } catch (err) {
      throw err;
    }
  },
  async updateAngajat(angajat) {
    try {
      return await Angajat.findByIdAndUpdate(angajat._id, angajat, {
        new: true,
      });
    } catch (err) {
      throw err;
    }
  },
  async getAngajatByQuery(query) {
    try {
      return await Angajat.find(query).lean();
    } catch (err) {
      throw err;
    }
  },
};
