const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useCreateInex', true);
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

const scanRoutes = require('./api/routes/scans');

mongoose.connect('mongodb://k3vinyan:'+ process.env.PW + '@cluster0-shard-00-00-6d3as.mongodb.net:27017,cluster0-shard-00-01-6d3as.mongodb.net:27017,cluster0-shard-00-02-6d3as.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection errors: '));
db.once('open', () => {
  console.log('connected to database')
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/scans', scanRoutes);

module.exports = app;
