// Store some data in the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const fs = require('fs');
const Professor = require('./schema');

connect(); // To the database


  // File configurations
const file = fs.createReadStream('voters.csv');

  // Asyncronous line-by-line input
file.on('line', function(line) {
  console.log(line);
});

// End the program when the file closes
file.on('close', function() {
  process.exit(0);
});


// Create the voters
