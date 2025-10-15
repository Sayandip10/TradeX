require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

if (!process.env.MONGO_URL) {
  console.error("FATAL ERROR: MONGO_URL is not defined in the .env file.");
  process.exit(1);
}

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(bodyParser.json());

// --- Seeding route for Holdings ---
app.get("/addHoldings", async (req, res) => {
  console.log("--- /addHoldings route hit! ---");
  let tempHoldings = [
    { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
    { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
    { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
    { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
    { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
    // Add other holdings data here...
  ];

  try {
    await HoldingsModel.deleteMany({});
    const insertedDocs = await HoldingsModel.insertMany(tempHoldings);
    console.log(`SUCCESS: Inserted ${insertedDocs.length} holdings documents.`);
    res.status(201).send(`Successfully added ${insertedDocs.length} holdings!`);
  } catch (error) {
    console.error("!!! ERROR during /addHoldings:", error);
    res.status(500).send("Error adding holdings: " + error.message);
  }
});

// --- THIS IS THE MISSING ROUTE ---
app.get("/addPositions", async (req, res) => {
  console.log("--- /addPositions route hit! ---");
  let tempPositions = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

  try {
    await PositionsModel.deleteMany({});
    const insertedDocs = await PositionsModel.insertMany(tempPositions);
    console.log(`SUCCESS: Inserted ${insertedDocs.length} positions documents.`);
    res.status(201).send(`Successfully added ${insertedDocs.length} positions!`);
  } catch (error) {
    console.error("!!! ERROR during /addPositions:", error);
    res.status(500).send("Error adding positions: " + error.message);
  }
});


// --- Data fetching routes ---
app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.status(201).send("Order saved!");
  } catch (error) {
    res.status(400).send("Error saving order: " + error.message);
  }
});


// --- Server Start Logic ---
const startServer = async () => {
  try {
    await mongoose.connect(uri);
    console.log(`DB connected successfully to: ${mongoose.connection.name}`);
    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}!`);
    });
  } catch (error) {
    console.error("Failed to connect to the database.", error);
    process.exit(1);
  }
};

startServer();

