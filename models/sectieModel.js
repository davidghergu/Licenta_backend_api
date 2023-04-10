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

sectieSchema.methods.moveCows = async function (
  sourceSectionId,
  destinationSectionId,
  cowIds
) {
  const sourceSection = await this.model("Sectie")
    .findById(sourceSectionId)
    .populate("cows");
  const destinationSection = await this.model("Sectie").findById(
    destinationSectionId
  );

  // Filter the cows to move by their IDs
  const cowsToMove = sourceSection.cows.filter((cow) =>
    cowIds.includes(cow._id.toString())
  );

  // Remove the selected cows from the source section
  sourceSection.cows = sourceSection.cow.filter(
    (cow) => !cowIds.includes(cow._id.toString())
  );

  // Push the selected cows to the destination section
  destinationSection.cows.push(...cowsToMove);

  // Save the changes to both garages
  await Promise.all([sourceGarage.save(), destinationGarage.save()]);

  return cowsToMove;
};

const Sectie = mongoose.model("sectie", sectieSchema);
module.exports = Sectie;
