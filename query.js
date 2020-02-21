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

  Voter.find().where('zipcode').equals(13617)

];

// Run the queries in parallel
Promise.all(queries)
  .then(function(results) {
    console.log('Voters in Canton: ', results[0].map(p => p.firstName + ' ' + p.lastName));

  }).catch(error => console.error(error.stack));
