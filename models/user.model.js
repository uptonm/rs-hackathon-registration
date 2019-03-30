const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  first: String,
  last: String,
  email: String,
  phone: String,
  googleId: String,
  school: String,
  major: String,
  organizer: Boolean,
  swagRedeemed: Boolean,
  dietaryRestrictions: String,
  waiverSigned: Boolean,
  conductSigned: Boolean
});

const User = mongoose.model("users", userSchema);

module.exports = User;
