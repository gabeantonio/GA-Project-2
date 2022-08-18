const Trip = require('../models/trip');

module.exports = {
    create,
    new: newItinerary
}

function create(req, res) {
    Trip.findById(req.params.id, function (err, trip) {
        trip.itinerary.push(req.body);
        trip.save(function (err) {
            console.log(trip, '<----- MAYBE HERE???')
            res.redirect(`/trips/${trip._id}`)
        })
    })
}

function newItinerary(req, res) {
    // Grab a Trip based on its ID.
    Trip.findById(req.params.id, function (err, trip) {
        console.log(trip, '<----- AND ALSO MAYBE HERE???')
        res.render('itineraries/new-itineraries', { title: 'Trip', trip: trip });
    })
}

