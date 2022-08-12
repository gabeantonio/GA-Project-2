const Trip = require('../models/trip');
const Itinerary = require('../models/itinerary');

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
            res.redirect(`trips/${req.params.id}`);
        })
    })
}

function newItinerary(req, res) {
    // Grab a Trip based on its ID.
    Trip.findById(req.params.id, function(err, trip) {
        res.render('itineraries/new-itineraries.ejs', {title: 'Trip', trip: trip});
    })
}