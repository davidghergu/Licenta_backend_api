const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const angajatSchema = new Schema(
  {
    nume: {
      type: String,
      required: true,
    },
    parola: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      enum: ["Angajat", "Admin"],
      required: false,
      default: "Angajat",
    },
  },
  { timestamps: true }
);

const Angajat = mongoose.model("angajat", angajatSchema);
module.exports = Angajat;
