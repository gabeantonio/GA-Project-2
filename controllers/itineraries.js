const Trip = require('../models/trip');

module.exports = {
    create,
    new: newItinerary
}

function create(req, res) {
    Trip.findById(req.params.id, function (err, trip) {
        trip.itinerary.push(req.body);
        trip.save(function (err) {
            res.redirect(`/trips/${trip._id}`)
        })
    })
}

function newItinerary(req, res) {
    Trip.findById(req.params.id, function (err, trip) {
        res.render('itineraries/new-itineraries', { title: 'Trip', trip: trip });
    })
}

