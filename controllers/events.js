const Trip = require('../models/trip');

module.exports = {
    new: newEvent,
    create
}

function newEvent(req, res) {
    Trip.findById(req.params.id, function (err, tripDocument) {
        const itinerary = tripDocument.itinerary.id(req.params.dayId)
        res.render('events/new-events.ejs', { title: 'Trip', trip: tripDocument, itinerary })
    })
}


function create(req, res) {

    Trip.findById(req.params.id, function (err, tripDocument) {
        let dayDocument = tripDocument.itinerary.id(req.params.dayId);
        dayDocument.events.push(req.body);
        tripDocument.save(function (err) {
            if (err) {
                res.redirect(`/trips/${tripDocument._id}`)
            } else {
                console.log(tripDocument, '<---- SAVED TRIP')
                res.redirect(`/trips/${tripDocument._id}/day/${dayDocument._id}`)
            }
        })
    })
}

