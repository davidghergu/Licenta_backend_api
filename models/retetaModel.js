const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const retetaSchema = new Schema(
  {
    cereale: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "cereale",
    },
    cantitate: {
      type: Number,
      required: false,
    },
  },
  { timestamps: false }
);

const Reteta = mongoose.model("reteta", retetaSchema);
module.exports = Reteta;
