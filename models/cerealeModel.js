const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cerealeSchema = new Schema(
  {
    nume: {
      type: String,
      required: true,
    },
    cantitate: {
      type: Number,
      required: true,
    },
    calorii: {
      type: Number,
      required: true,
    },
    proteine: {
      type: Number,
      required: true,
    },
    grasimi: {
      type: Number,
      required: false,
    },
    carbohidrati: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

const Cereale = mongoose.model("cereale", cerealeSchema);
module.exports = Cereale;
