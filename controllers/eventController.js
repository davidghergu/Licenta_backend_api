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
      const query = await Event.findByIdAndUpdate({ _id: id },{status:"Terminat"});

      const updateObject = JSON.parse(query.schimbariVite);
      //console.log(updateObject);
      const filterObject = JSON.parse(query.filtruVite);
      //console.log(filterObject);
      
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
      return [filterObject,updateObject];
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
  async acceptEvent({ id }) {
    try {
      return await Event.findByIdAndUpdate({ _id: id },{status:"Acceptat"});
    } catch (err) {
      throw err;
    }
  },
};
