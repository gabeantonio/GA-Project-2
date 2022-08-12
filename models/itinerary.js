const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itinerarySchema = new Schema({
    eventTime: {
        type: Date
    },
    event: {
        type: String
    }
});

module.exports = mongoose.model('Itinerary', itinerarySchema);