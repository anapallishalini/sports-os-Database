const mongoose = require('mongoose');

const academySchema = new mongoose.Schema({
  name:String,
  sport:String,
  location:String,
  distanceKm:Number,
  monthlyFee:Number,
  batchSchedule:String,
  trainingLevel:String,
  verified:Boolean
});

module.exports =
mongoose.model('Academy',academySchema);