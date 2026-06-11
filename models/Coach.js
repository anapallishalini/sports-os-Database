const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
  name:String,
  sport:String,
  certification:String,
  level:String,
  experienceYears:Number,
  academyId:Number
});

module.exports =
mongoose.model('Coach',coachSchema);