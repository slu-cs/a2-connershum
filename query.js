// Query the voters Database

const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

connect(); // To the database

/*// What documents are in the collection?
const query = Voter.find();
query.exec(function(error, voters) {
  if (error) console.error(error.stack);
  console.log(voters);
});*/

const queries = [

  // How many registered voters live in the Canton zip code (13617)?
  Voter.countDocuments().where('zipcode').equals(13617),

  // What are the full names of all the registered voters whose first-name is STARR?
  Voter.find().where('firstName').equals('STARR'),

  // How many people voted in the 2016 general election (GE16)?
  Voter.find({'votes':{$regex: '.*GE16.*'}}),

  // What is the last-name that comes last in the county in alphabetical order?
  Voter.find().sort('-lastName').limit(1),

  // How many zip codes does the county contain?
  Voter.distinct('zipcode')

];

// Run the queries in parallel
Promise.all(queries)
  .then(function(results) {
    console.log('Voters in Canton: ', results[0]);
    console.log('Voters with First Name "Starr": ', results[1].map(p => (p.firstName + ' ' + p.lastName)));
    console.log('Voters that Voted in the 2016 General Election: ', results[2].length);
    console.log('Alphabetically Last Last-Name in the County: ', results[3].map(p => (p.lastName)));
    console.log('Number of Zipcodes: ', results[4].length);
  }).catch(error => console.error(error.stack));
