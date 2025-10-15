const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean, // <-- THE MISSING FIELD HAS BEEN ADDED
});

module.exports = { HoldingsSchema };