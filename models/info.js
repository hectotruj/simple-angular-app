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
    address: {
        type: String
    },
    company: {
        type: String
    }
});

const Information = module.exports = mongoose.model('Information', InformationSchema);

module.exports.getInformationById = function(id, callback) {
    Information.findById(id, callback);
}

module.exports.addInformation = function(newInformation, callback) {
    newInformation.save(callback);
}