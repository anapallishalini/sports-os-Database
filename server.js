const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//const Athlete = require('./models/Athlete');


dotenv.config();

connectDB();

//Athlete.create({
  //  name: "Rahul Sharma",
  //  sport: "Cricket",
  // age: 16,
  // academy: "Elite Cricket Club"
  // });

const app = express();

app.listen(8095, () => {
    console.log("Server Running");
});