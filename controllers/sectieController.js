const { Sectie } = require("../models");

module.exports = {
  async createSectie(sectie) {
    try {
      return await Sectie.create(sectie);
    } catch (err) {
      throw err;
    }
  },
  // async updateCow(cow) {
  //   try {
  //     return await Cow.findByIdAndUpdate(cow._id, cow, {
  //       new: true,
  //     });
  //   } catch (err) {
  //     throw err;
  //   }
  // },
  // async getCowsByQuery(query) {
  //   try {
  //     return await Cow.find(query).lean();
  //   } catch (err) {
  //     throw err;
  //   }
  // },
  // async deleteCow(id) {
  //   try {
  //     const newCow = await Cow.findByIdAndUpdate(
  //       id,
  //       { is_active: false },
  //       { new: true }
  //     );
  //     return newAddress;
  //   } catch (err) {
  //     throw err;
  //   }
  // },
};
