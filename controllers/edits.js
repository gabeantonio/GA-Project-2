const Trip = require('../models/trip');

module.exports = {
    edit: editPlan,
    update: updatePlan
}

function editPlan(req, res) {
    Trip.findById(req.params.id, function (err, tripDocument) {
        console.log(tripDocument, '<--- TRIP')
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

// function updatePlan(req, res) {
//     Trip.findById(req.params.id, function(err, tripDocument) {
//         let dayDocument = tripDocument.itinerary.id(req.params.dayId);
//         let specificEvent = dayDocument.events.id(req.params.eventId);
//         console.log(dayDocument, '<--- DAY DOCUMENT!');
//         console.log(req.body, '<--- THE CHANGE I WANT TO MAKE')
//         console.log(dayDocument.events.id(req.params.eventId), '<--- THE CURRENT EVENT IM ON')
//         specificEvent.remove();
//         specificEvent = req.body;
//         console.log(specificEvent, '<--- SPECIFIC EVENT!')
//         console.log(dayDocument, '<--- DAY DOCUMENT AFTER!')
        
//     })
// }