// Store some data in the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Professor = require('./schema');

connect(); // To the database

user.question('Filename: ', function(filename) {
  console.log(filename);

  // File configurations
  const file = readline.createInterface({
    input: fs.createReadStream(filename)
  });

  // Asyncronous line-by-line input
  file.on('line', function(line) {
    console.log(line);
  });

  // End the program when the file closes
  file.on('close', function() {
    process.exit(0);
  });
});

// Create the voters
