// Store some data in the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const readline = require('readline');
const fs = require('fs');
const Voter = require('./schema');

connect(); // To the database

// Create the voters
const voters = [];

// File configurations
const filename = 'voters.csv';
const file = readline.createInterface({
  input: fs.createReadStream(filename)
});

// Asyncronous line-by-line input
file.on('line', function(line) {
  var array = line.split(',');

  voters.push((new Voter({
    firstName: array[0],
    lastName: array[1],
    zipcode: array[2],
    votes: array[3]
  })).save);
});

// End the program when the file closes
file.on('close', function() {
  console.log('voters made');
  Promise.all(saves)
    .then(() => console.log('All saved'))
    .catch(error => console.error(error.stack));
  process.exit(0);
});


// Not working !!!!!
voters.map(v => v.save() {

});
const saves = voters.map(v => v.save());
/*Promise.all(saves)
  .then(() => console.log('All saved'))
  .catch(error => console.error(error.stack));
*/
