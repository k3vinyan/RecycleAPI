const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Scan = require('../models/scan');

router.get('/', (req, res, next) => {
  Scan.find({})
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.sendStatus(500).json({
        error: err
      })
    })
});

router.post('/', (req, res, next) => {
  Scan.estimatedDocumentCount({}, function(err, c){
    return c;
  })
  .then(count => {
    const scan = new Scan({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      route: req.body.route,
      entry: count
    })

    scan
      .save()
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.sendStatus(500).json({
          error: err
        })
      })
  })

});

module.exports = router;
