const { Event } = require("../models");

module.exports = {
  async createEvent(event) {
    try {
      return await Event.create(event);
    } catch (err) {
      throw err;
    }
  },
  async updateEvent(event) {
    try {
      return await Event.findByIdAndUpdate(event._id, event, {
        new: true,
      });
    } catch (err) {
      throw err;
    }
  },
  //   async getAngajatByQuery(query) {
  //     try {
  //       return await Angajat.find(query).lean();
  //     } catch (err) {
  //       throw err;
  //     }
  //   },
};
