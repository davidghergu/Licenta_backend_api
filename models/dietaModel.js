const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dietaSchema = new Schema(
  {
    nume: {
      type: String,
      required: true,
    },
    reteta: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "reteta",
      },
    ],
  },
  { timestamps: true }
);

const Dieta = mongoose.model("dieta", dietaSchema);
module.exports = Dieta;
