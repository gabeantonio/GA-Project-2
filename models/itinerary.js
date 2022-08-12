const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itinerarySchema = new Schema({
    
    day: {
        type: Number,
        min: 1,
        max: 7
    },
    eventTime: {
        type: Date
    },
    event: {
        type: String
    }
});

module.exports = mongoose.model('Itinerary', itinerarySchema);