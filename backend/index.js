require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const auth = require("./middleware/auth");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

if (!process.env.MONGO_URL || !process.env.JWT_SECRET) {
  console.error("FATAL ERROR: Environment variables are not defined.");
  process.exit(1);
}

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const jwtSecret = process.env.JWT_SECRET;

const app = express();

// CORS Configuration
const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));
app.use(bodyParser.json());


// --- AUTHENTICATION & PROFILE ROUTES ---

app.post("/login", async (req, res) => {
  console.log("--- /login route hit! ---");
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }
    const payload = { user: { id: user.id } };
    jwt.sign(payload, jwtSecret, { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;
      console.log(`SUCCESS: User logged in: ${email}`);
      res.json({ token });
    });
  } catch (error) {
    console.error("!!! ERROR during /login:", error);
    res.status(500).json({ message: "Server error during login." });
  }
});

app.post("/register", async (req, res) => {
  console.log("--- /register route hit! ---");
  try {
    const { fullName, email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new UserModel({ fullName, email, password: hashedPassword });
    await newUser.save();
    console.log(`SUCCESS: New user registered: ${email}`);
    const payload = { user: { id: newUser.id } };
    jwt.sign(payload, jwtSecret, { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;
      res.status(201).json({ token });
    });
  } catch (error) {
    console.error("!!! ERROR during /register:", error);
    res.status(500).json({ message: "Server error during registration." });
  }
});

app.get("/api/profile", auth, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


// --- DATA & SEEDING ROUTES ---

app.get("/allHoldings", auth, async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/allPositions", auth, async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/newOrder", auth, async (req, res) => {
  try {
    const newOrder = new OrdersModel({
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

