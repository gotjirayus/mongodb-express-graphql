const mongoose = require('mongoose');

const Schema = require('../schema/user');

module.exports = mongoose.model('user', Schema);