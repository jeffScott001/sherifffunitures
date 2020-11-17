const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const FittngSchema = new Schema({
    name: {
        type: String,
    },
    category: {
        type: String
    },
    area: {
        type: String
    },
    description: {
        type: String
    },
    imageStrings:[{
        type: String
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Fitting = mongoose.model('fittting', FittngSchema);