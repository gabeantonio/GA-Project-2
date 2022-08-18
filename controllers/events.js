const trip = require('../models/trip');
const Trip = require('../models/trip');

module.exports = {
    new: newEvent,
    create
}

function newEvent(req, res) {
    Trip.findById(req.params.id, function(err, tripDocument) {
        let day;
        for (let i = 0; i < tripDocument.itinerary.length; i++) {
            day = tripDocument.itinerary[i]._id;
        }
        res.render('events/new-events.ejs', {title: 'Trip', trip: tripDocument, day})
    })
}

// function create(req, res) {
//     Trip.findById(req.params.id, function(err, tripDocument) {
//     trip.itinerary.events.push(req.body);
//     trip.save(function(err) {
//         console.log(err, '<--- Error Message');
//         res.redirect(`/`);
//     });
//     });
// }

function create(req, res) {

    Trip.findById(req.params.id, function(err, tripDocument) {
        console.log(tripDocument, '<----- TRIP!!!!!!');
        console.log(req.params.dayId, '<------ REQ PARAMS DAY ID')
        let index = tripDocument.itinerary.map(itinerary => itinerary.id).indexOf(req.params.dayId)
        console.log(index, '<--- This is the index')
        let itinerary = tripDocument.itinerary[index]._id;
        let day = tripDocument.itinerary[index].day;
        let events = tripDocument.itinerary[index].events;
        events.push(req.body);
        tripDocument.save(function(err) {
            if(err) {
                res.redirect(`/trips/${tripDocument._id}`)
            } else {
            console.log(tripDocument._id, '<---- Trip ID!!!!!!!!!');
            console.log(day, '<---- DAY ID!!!!!!!')
            res.redirect(`/trips/${tripDocument._id}/day/${itinerary}`)
            }
        })
})
}

