const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sectieSchema = new Schema(
  {
    tip: {
      type: String,
      required: true,
    },
    capacitate: {
      type: Number,
      required: true,
    },
    status: {
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
module.exports = { Sectie };
