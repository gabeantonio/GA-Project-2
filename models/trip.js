const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({

    time: {type: Date},

    event: {type: String}
    
});

const itinerarySchema = new Schema({
    
    day: {
        type: Number,
        min: 1,
        max: 7
    },
    events: [eventSchema]
});


const tripSchema = new Schema({
    
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

    destination: {
        type: String
    },
    year: {
        type: Date
    },
    itinerary: [itinerarySchema]
    
});



module.exports = mongoose.model('Trip', tripSchema);
