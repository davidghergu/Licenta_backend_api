const {
  cerealeController,
  cowController,
  dietaController,
  retetaController,
  angajatController,
  eventController,
  
} = require("./controllers");

module.exports = {
  //listing methods

  async createDieta(req, res, next) {
    try {
      res.send(await dietaController.createDieta(req.body));
    } catch (err) {
      next(err);
      console.error(err);
    }
  },

  async getAllDiete(req, res, next) {
    try {
      res.send(await dietaController.getDieteByQuery());
    } catch (err) {
      console.error(err);
    }
  },





  async createAngajat(req, res, next) {
    try {
      res.send(await angajatController.createAngajat(req.body));
    } catch (err) {
      next(err);
      console.error(err);
    }
  },
  async createEvent(req, res, next) {
    try {
      const viteQuery = cowController.createQuery(req.body);


      const serializedQuery = JSON.stringify(viteQuery);
      const filtru = JSON.stringify({ _id: req.body.id });

      const newEvent = {
        sarcina: req.body.sarcina,
        filtruVite: filtru,
        schimbariVite: serializedQuery,
      };

      res.send(await eventController.createEvent(newEvent));
    } catch (err) {
      next(err);
      console.error(err);
    }
  },
  async finishEvent(req, res, next) {
    try {
      const update = await eventController.finishEvent(req.body);

      // const sourceSectionId = "60e92ab9e6c30c61f36f6b75";
      // const destinationSectionId = "60e92ab9e6c30c61f36f6b76";
      // const cowIds = ["60e92ab9e6c30c61f36f6b7a", "60e92ab9e6c30c61f36f6b7b"];

      // const sourceGarage = await Garage.findById(sourceSectionId);
      // const movedCows = await sourceGarage.moveCars(
      //   sourceSectionId,
      //   destinationSectionId,
      //   cowIds
      // );
      // console.log(movedCows);

      res.send(await cowController.updateCow(update[0],update[1]));
    } catch (err) {
      next(err);
      console.error(err);
    }
  },
  async acceptEvent(req, res, next) {
    try {
      res.send(await eventController.acceptEvent(req.body));
    } catch (err) {
      next(err);
      console.error(err);
    }
  },
  async createCereale(req, res, next) {
    try {
      res.send(await cerealeController.createCereale(req.body));
    } catch (err) {
      next(err);
      console.error(err);
    }
  },
  
  async createReteta(req, res, next) {
    try {
      res.send(await retetaController.createReteta(req.body));
    } catch (err) {
      next(err);
      console.error(err);
    }
  },
  async getAllRetete(req, res, next) {
    try {
      const result = await retetaController.getRetetaByQuery();
      res.send(result);
    } catch (err) {
      console.error(err);
    }
  },

  async createCow(req, res, next) {
    try {
      res.send(await cowController.createCow(req.body));
    } catch (err) {
      next(err);
      console.error(err);
    }
  },
  async getAllCows(req, res, next) {
    try {
      res.send(await cowController.getCowsByQuery());
    } catch (err) {
      console.error(err);
    }
  },
  async getAllCereale(req, res, next) {
    try {
      const result = await cerealeController.getCerealeByQuery();
      res.send(result);
    } catch (err) {
      console.error(err);
    }
  },
  async getAllEvents(req, res, next) {
    const query = { status: { $in: ["Trimis", "Acceptat"] } };
    try {
      res.send(await eventController.getEventsByQuery(query));
    } catch (err) {
      console.error(err);
    }
  },
  async updateCow(req, res, next) {
    try {
        cowController.updateCowOficial(req.body)
        res.send(result)

    } catch (err) {
      res.send(err);
    }
  },



  
  async login(req, res, next) {
    try {
      const { nume, parola } = req.body;
      const user = await angajatController.getAngajatByQuery({ nume, parola });
      if (user) {
        res.status(200).send(user);
      } else {
        // If the user does not exist, return an error response
        res.sendStatus(401).send({ message: "Invalid credentials" });
      }
    } catch (err) {
      res.sendStatus(401);
    }
  },

  
};
