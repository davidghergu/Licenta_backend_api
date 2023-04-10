const { Event } = require("../models");

module.exports = {
  async createEvent(event) {
    try {
      return await Event.create(event);
    } catch (err) {
      throw err;
    }
  },
  async finishEvent({ id }) {
    try {
      const query = await Event.findOne({ _id: id });

      const updateObject = JSON.parse(query.schimbariVite);

      //     const query = MyModel.updateMany(
      //       updateObject.filter,
      //       updateObject.update
      //     );
      //     query.exec(function (err, result) {
      //       if (err) {
      //         console.log(err);
      //       } else {
      //         console.log(result);
      //       }
      //     });
      //   }
      // });
      return updateObject;
    } catch (err) {
      throw err;
    }
  },
  async getEventsByQuery(query) {
    try {
      return await Event.find(query).lean();
    } catch (err) {
      throw err;
    }
  },
};
