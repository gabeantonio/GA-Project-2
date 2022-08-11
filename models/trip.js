const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    destination: {
        type: String
    },
    year: {
        type: Date
    }
});


