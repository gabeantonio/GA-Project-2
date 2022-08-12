const Trip = require('../models/trip');

module.exports = {
    create,
    new: newItinerary
}

function create(req,res) {
    console.log(req.params.id, '<--- Params Trip ID');
    console.log(req.body, '<--- The itinerary information.');
    Trip.findById(req.params.id, function(err, trip) {
        trip.itinerary.push(req.body);
        trip.save(function(err) {
            res.render(`trips/${req.params.id}`, {title: 'Trip', trip: trip});
        })
    })
}

function newItinerary(req, res) {
    // Grab a Trip based on its ID.
    Trip.findById(req.params.id, function(err, trip) {
        res.render('itineraries/new-itineraries.ejs', {title: 'Trip', trip: trip});
    })
}