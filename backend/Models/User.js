const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ["disposer", "recycler"], required: true },
  contactNumber: { type: String, required: true },
  location: { type: String, required: true },
  dateJoined: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
