// Define a plan for a collection

const mongoose = require('mongoose');

// Schema for a collection of voters
const Voter = new mongoose.Schema({
  firstName: String,
  lastName: String,
  zipcode: Number,
  votes: String
});

// Speed up queries on all fields
Voter.index({firstName: 1});
Voter.index({lastName: 1});
Voter.index({zipcode: 1});
Voter.index({votes: 1});

// Compile and export this Schema
module.exports = mongoose.model('Voter', Voter);
