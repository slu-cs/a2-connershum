// Store some data in the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const readline = require('readline');
const fs = require('fs');
const Voter = require('./schema');

connect(); // To the database

// Create the voters list
const voters = [];

// File configurations
const filename = 'voters.csv';
const file = readline.createInterface({
  input: fs.createReadStream(filename)
});

// Asyncronous line-by-line input, creating voters and saving them
file.on('line', function(line) {
  var array = line.split(',');

  var avoter = new Voter({
    firstName: array[0],
    lastName: array[1],
    zipcode: array[2],
    votes: array[3]
  });
  voters.push(avoter);

});

// End the program when the file closes (and when the saves are done)
file.on('close', function() {
  mongoose.connection.dropDatabase()
    .then(() => Promise.all(voters.map(v => v.save())))
    .then(() => mongoose.connection.close())
    .then(() => console.log('voters made'));
});
