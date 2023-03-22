const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    sarcina: {
      type: String,
      required: true,
    },
    tip_sarcina: {
      type: String,
      enum: ["Vita", "Sectie"],
      required: true,
    },
    schimbari: [
      {
        type: String,
        required: true,
      },
    ],
    status: {
      type: String,
      enum: ["Acceptat", "Terminat", "Trimis"],
      required: true,
      default: "Trimis",
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("cow", eventSchema);
module.exports = Event;
