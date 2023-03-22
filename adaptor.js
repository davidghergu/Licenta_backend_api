const {
  cerealeController,
  cowController,
  dietaController,
  retetaController,
  angajatController,
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
  async createAngajat(req, res, next) {
    try {
      res.send(await angajatController.createAngajat(req.body));
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
  async updateCow(req, res, next) {
    try {
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

  async updateEvent(req, res, next) {
    try {
      //update status -> terminat
      if (req.body.tip_sarcina == "vita") {
        for (let i = 0; i < req.body.schimbari.lenght; i++) {
          // let changeBody = {
          //   _id: req.body.idarray[i],
          //   ...req.body.schimbari[i],
          // };

          cowController.updateCow(req.body.schimbari[i]);
        }
      } else {
        for (let i = 0; i < req.body.schimbari.lenght; i++) {
          sectieController.updateSectie(req.body.schimbari[i]);
        }
      }
    } catch (err) {
      res.send(err);
    }
  },
};
