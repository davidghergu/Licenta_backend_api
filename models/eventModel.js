const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    sarcina: {
      type: String,
      required: true,
    },
    filtruVite: String,
    schimbariVite: {
      type: String,
      required: false,
    },

    filtruSectii: String,
    schimbariSectii: {
      type: String,
      required: false,
    },

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
