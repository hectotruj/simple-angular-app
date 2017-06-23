const express = require('express');
const router = express.Router();
const Information = require('../models/info')

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


//Mongo GET
router.get('/information', (req, res, next) => {
  res.send('this will get mongo info');
});

//Mongo POST
router.post('/information', (req, res, next) => {
  let newInformation = new Information({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    company: req.body.company
  });

  Information.addInformation(newInformation, (error, information) => {
    if(error) {
      res.json({success: false, message: 'Failed to save information'});
    } else {
      res.json({success: true, message: 'Information saved'});
    }
  })
});

module.exports = router;