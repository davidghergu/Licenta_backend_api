const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    sarcina: {
      type: String,
      required: true,
    },
    schimbariVite: [
      {
        type: String,
        required: true,
      },
    ],
    schimbariSectii: [
      {
        type: String,
        required: true,
      },
    ],
    status: {
      type: String,
      enum: ["Acceptat", "Terminat", "Trimis"],
      required: false,
      default: "Trimis",
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("event", eventSchema);
module.exports = Event;
