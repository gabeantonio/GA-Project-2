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
    Trip.findById(req.params.id, function(err, tripDocument) {
      // Update req.body to contain user info
    req.body.userId = req.user._id;
    req.body.userName = req.user.name;
      // Add the comment
    trip.itinerary.events.push(req.body);
    trip.save(function(err) {
        res.redirect(`/trips/${trip._id}/day/${trip.itinerary.day._id}`);
    });
    });
}



// function create(req, res) {
//     Trip.findById(req.params.id, function(err, tripDocument) {
//         console.log(tripDocument, '<--- EVENT CREATION!!');
//         let events;
//         let itinerary;
//         for (let i = 0; i < tripDocument.itinerary.length; i++) {
//             itinerary = tripDocument.itinerary[i]._id;
//             day = tripDocument.itinerary[i].day;
//             events = tripDocument.itinerary[i].events;
//             events.push(req.body);
//             console.log(events, '<--- EVENTS!!!')
//             console.log(tripDocument, '<---- TRIP WITH EVENTS???');
//             tripDocument.save(function(err) {
//                 res.render('days/show-day.ejs', {title: 'Trip', trip: tripDocument});
//             })
//         }
//     })
// }