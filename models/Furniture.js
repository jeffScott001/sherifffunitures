const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const FurnitureSchema = new Schema({
    name: {
        type: String,
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    area: {
        type: String
    },
    imageStrings: [{
        type: String
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Furniture = mongoose.model('furniture', FurnitureSchema);