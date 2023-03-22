const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cowSchema = new Schema(
  {
    numar_crotalii: {
      type: String,
      required: true,
    },
    categorie: {
      type: String,
      enum: ["Mama", "Taur", "Vitel Tanar", "Vitel pe ingrasare", "Juninca"],
      required: true,
    },
    sex: {
      type: String,
      enum: ["M", "F"],
      required: true,
    },
    rasa: {
      type: String,
      required: true,
    },
    varsta: {
      type: Number,
      required: false,
    },
    masa_corporala: {
      type: Number,
      required: false,

      //default: true,
    },

    randament: {
      type: Number,
      required: false,
    },
    dieta: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "dieta",
    },
  },
  { timestamps: true }
);

const Cow = mongoose.model("cow", cowSchema);
module.exports = Cow;
