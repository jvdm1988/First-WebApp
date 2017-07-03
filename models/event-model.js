const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const myEventSchema = new Schema(
  {
    category: { type: String },
    name: { type: String },
    location: { type: String},
    date: { type: Date},
    photoUrl: { type: String },
    description: { type: String }
  }
);


const EventModel = mongoose.model("Event", myEventSchema);

module.exports = EventModel;
