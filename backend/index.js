
require('dotenv').config();

const express=require("express");
const mongoose=require("mongoose");

const PORT=process.env.PORT || 3002;
const uri=process.env.MONGO_URL;

const app=express();

app.listen(3002,()=>{
    console.log("App running successfully");
    mongoose.connect(uri)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));
});


