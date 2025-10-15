const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema");

// This creates the Mongoose model.
// Mongoose will automatically create a collection named "holdings" (plural and lowercase) from the name "Holding".
const HoldingsModel = model("Holding", HoldingsSchema);

// This exports the model so it can be used in your index.js file.
module.exports = { HoldingsModel };