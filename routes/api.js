const express = require('express');
const router = express.Router();
const Information = require('../models/info')

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});//tester router


//Mongo GET
router.get('/information/:id', (req, res, next) => {
  Information.getInformationById(req.params.id, (error, information) => {
    if (error) {
      res.json({ success: false, message: 'Failed to get information' });
    } else {
      res.json({ success: true, message: 'Information saved', information: information });
    }//if there are no errors, return the information body along with some information
  });//Get information by id
});//router to get information by id

//Mongo GET
router.get('/salaries/:company', (req, res, next) => {
  Information.getSalarySum(req.params.company, (error, salary) => {
    if (error) {
      res.json({ success: false, message: 'Failed to get information' });
    } else {
      res.json({ success: true, message: 'Information saved', salary: salary[0].sum });
    }//if there are no errors, return the information body along with some information
  });//Get company by name
});//router to get company by name

//Mongo POST
router.post('/information', (req, res, next) => {
  let newInformation = new Information({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    salary: req.body.salary,
    address: req.body.address,
    company: req.body.company
  }); //preparing the object

  Information.addInformation(newInformation, (error, information) => {
    if (error) {
      res.json({ success: false, message: 'Failed to save information' });
    } else {
      res.json({ success: true, message: 'Information saved', id: information._id });
    }//if there are no errors, save the information
  })
});

module.exports = router;