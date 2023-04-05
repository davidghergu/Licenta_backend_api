const { Cow } = require("../models");

module.exports = {
  async createCow(cow) {
    try {
      return await Cow.create(cow);
    } catch (err) {
      throw err;
    }
  },
  async updateCow(update) {
    try {
      return await Cow.findByIdAndUpdate(update._id, update.$set);
    } catch (err) {
      throw err;
    }
  },
  async getCowsByQuery(query) {
    try {
      return await Cow.find(query).populate("dieta").lean();
    } catch (err) {
      throw err;
    }
  },
  createQuery({ id, dieta, categorie }) {
    const viteQuery = Cow.updateMany(
      { _id: id },
      {
        $set: {
          dieta: dieta,
          categorie: categorie,
          updatedAt: Date.now(),
        },
      }
    );

    return viteQuery.getUpdate();
  },
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
