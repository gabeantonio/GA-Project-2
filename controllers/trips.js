const Trip = require('../models/trip');

module.exports = {
    index,
    new: newTrip
}

function index(req, res) {
    res.render('trips/my-trips.ejs')
}

function newTrip(req, res) {
    res.render('trips/new-trip.ejs');
}