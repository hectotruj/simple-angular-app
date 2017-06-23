// Get dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); //Parses incoming request data
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database')

//Database connection
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log('connected to db ' + config.database);
})
mongoose.connection.on('error', (error) => {
  console.log('Database error:' + error);
})
// Get our API routes
const api = require('./routes/api');

const app = express();

const port = process.env.PORT || '3000';
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());

app.use('/api', api);

app.listen(port, () => {
  console.log('Server started on port ' + port);
})

app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
})
