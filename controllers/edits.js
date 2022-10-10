const Trip = require('../models/trip');

module.exports = {
    edit: editPlan,
    update: updatePlan
}

function editPlan(req, res) {
    Trip.findById(req.params.id, function (err, tripDocument) {
        const itinerary = tripDocument.itinerary.id(req.params.dayId)
        const eventid = req.params.eventId;
        res.render('events/edits.ejs', { title: 'Trip', trip: tripDocument, itinerary, eventid })
    })
}



function updatePlan(req, res) {
    Trip.findById(req.params.id, function (err, tripDocument) {
        let dayDocument = tripDocument.itinerary.id(req.params.dayId);
        let index = tripDocument.itinerary.map(itinerary => itinerary.id).indexOf(req.params.dayId);
        let eventIndex = tripDocument.itinerary[index].events.map(event => event.id).indexOf(req.params.eventId);
        tripDocument.itinerary[index].events[eventIndex] = req.body;
        tripDocument.save(function (err) {
            if (err) {
                res.redirect(`/trips/${tripDocument._id}`)
            } else {
                res.redirect(`/trips/${tripDocument._id}/day/${dayDocument._id}`)
            }
        })
    })
}
