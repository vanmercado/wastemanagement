const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WasteSchema = new Schema({
  disposerUserId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  datePosted: { type: Date, default: Date.now },
  eventDate: { type: Date, required: true },
  eventName: { type: String, required: true },
  eventLocation: String,
  information: String,
  estimatedWeight: { type: Number, required: true }, // in kilos
  pickupTime: Date,
  recyclerUserId: { type: Schema.Types.ObjectId, ref: "User" },
  acknowledgedDate: Date,
});

module.exports = mongoose.model("Waste", WasteSchema);
