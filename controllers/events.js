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

function create(req, res) {
    // Trip.findById(req.params.id, function(err, trip) {
    //     console.log(req.body, '<----- EVENT INFORMATION');
    //     console.log(trip, '<---- TRIP CREATE!!!');
    //     // let events = [];
    //     for (let i = 0; i < trip.itinerary.length; i++) {
    //         trip.itinerary[i].events.push(req.body);
    //         // events = trip.itinerary[i].events
    //         trip.save(function(err){
    //             res.redirect(`/trips/${trip.id}/day/${trip.itinerary._id}`)
    //             console.log(trip.itinerary[i].events, '<--- LOOK HERE RN!!!!');
    //         })
    //     }       
    // })
}


