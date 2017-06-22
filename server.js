// Get dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); //Parses incoming request data
const cors = require('cors');
const mongoose = require('mongoose');

// Get our API routes
const api = require('./routes/api');

const app = express();

const port = process.env.PORT || '3000';
app.use(cors());

app.use(bodyParser.json());

app.use('/api', api);

app.listen(port, () => {
  console.log('Server started on port ' + port);
})

app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
})
