const express = require('express'); // Fast, unopinionated, minimalist web framework for node.
const app = express(); // Initiate Express Application
const mongoose = require('mongoose'); // Node Tool for MongoDB
const config = require('./config/database');
const path = require('path'); // NodeJS Package for file paths

mongoose.Promise = global.Promise;

mongoose.connect(config.uri, (err) => {
    
    if (err) {
      console.log('Could NOT connect to database: ', err); // Return error message
    } else {
        
      console.log('Connected to ' + config.db); // Return success message
    }
  });
  app.use(express.static(__dirname + '/client/dist/'));
app.get('*', (req, res) => {
    //res.send('Hello World');
    res.sendfile(path.join(__dirname + 'client/dist/index.html'));
  });
  
  // Start Server: Listen on port 8080
  app.listen(8080, () => {
    console.log('Listening on 8080')
  });
  