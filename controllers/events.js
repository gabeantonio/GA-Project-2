const Trip = require('../models/trip');

module.exports = {
    new: newEvent
}

function newEvent(req, res) {
    res.render('events/new-events.ejs')
}

// function newItinerary(req, res) {
//     // Grab a Trip based on its ID.
//     Trip.findById(req.params.id, function(err, trip) {
//         res.render('itineraries/new-itineraries', {title: 'Trip', trip: trip});
//     })
// }