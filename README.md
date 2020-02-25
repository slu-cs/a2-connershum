# A2
CS332 Assignment #2

Citations: 

Timing problems:
  - create.js can end before all the voters finish saving.
  - create.js can dropDatabase after saving has begun.
  
Suggested fixes (see create.js):
  - Drop the database before starting to save.
  - Then use Promise.all to wait for saves to complete.
  - Then close the connection so that create.js can end.
