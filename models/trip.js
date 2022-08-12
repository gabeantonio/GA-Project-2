const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    destination: {
        type: String
    },
    year: {
        type: Date
    },
    itinerary: [{type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary'}]
});

module.exports = mongoose.model('Trip', tripSchema);
