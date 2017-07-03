const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const myWorkshopSchema = new Schema(
  {
    category: { type: String },
    name: { type: String },
    location: { type: String },
    date: { type: Date },
    photoUrl: { type: String },
    description: { type: String }
  }
);


const WorkshopModel = mongoose.model("Workshop", myWorkshopSchema);

module.exports = WorkshopModel;
