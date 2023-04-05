const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sectieSchema = new Schema(
  {
    tip: {
      //exterior interior
      type: String,
      required: true,
    },
    capacitate: {
      type: Number,
      required: true,
    },
    status: {
      //curatata necuratata
      type: String,
      required: false,
    },
    cows: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "cow",
      },
    ],
  },
  { timestamps: true }
);

const Sectie = mongoose.model("sectie", sectieSchema);
module.exports = Sectie;
