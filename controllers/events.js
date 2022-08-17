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

}


// function create(req,res) {
//     // Log what was submitted so you can see.
//     req.body.user = req.user._id;
//     console.log(req.user, '<--- This is the User')
//     // console.log(req.body, '<--- This is what was submitted.');
//     // Create a new Trip in the Database.
//     console.log(req.body, '<--- Req.body')
//     Trip.create(req.body, function(err, tripDocument) {
        
//         if(err) {
//             console.log('Error in the Create Trip Controller!');
//             return res.render('trips/new-trip.ejs')
//         }
//         console.log(tripDocument, '<--- Trip created in Database.');
//         res.redirect('/trips');
//     })
// }