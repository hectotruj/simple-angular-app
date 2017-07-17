const mongoose = require('mongoose');
const config = require('../config/database');

//information scheme
const InformationSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    salary: {
        type: Number
    },
    address: {
        type: String
    },
    company: {
        type: String
    }
});

const Information = module.exports = mongoose.model('Information', InformationSchema);

module.exports.getInformationById = function (id, callback) {
    console.log(id);
    Information.findById(id, callback);
}

module.exports.getSalarySum = function (company, callback) {
    console.log(company);
    Information.aggregate()
        .match({ 'company': company })
        .group({
            _id: '$company',
            'sum': { $sum: '$salary' }
        }).exec(callback);
}

module.exports.addInformation = function (newInformation, callback) {
    newInformation.save(callback);
}

