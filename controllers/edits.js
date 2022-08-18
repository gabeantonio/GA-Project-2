const trip = require('../models/trip');
const Trip = require('../models/trip');

module.exports = {
    edit: editPlan,
    update: updatePlan
}

function editPlan(req, res) {
    Trip.findById(req.params.id, function(err, tripDocument) {
        console.log(tripDocument, '<---- EDIT THIS!!!!!!!')
        let itinerary;
        let day;
        let events;
        for (let i = 0; i < tripDocument.itinerary.length; i++) {
            itinerary = tripDocument.itinerary[i]._id
            day = tripDocument.itinerary[i].day
            events = tripDocument.itinerary[i].events
        }
        res.render('edits/edits.ejs', {title: 'Trip', trip: tripDocument, itinerary, day, events})
    })
}

function updatePlan(req, res) {
    // Trip.findById(req.params.id, function(err, tripDocument) {
    //     console.log('HELLOO!!!!!')
    //     let index = tripDocument.itinerary.map(itinerary => itinerary.id).indexOf(req.params.dayId);
    //     let itinerary = tripDocument.itinerary[index]._id;
    //     let day = tripDocument.itinerary[index].day;
    //     let events = tripDocument.itinerary[index].events;
    //     events = [];
    //     events.push(req.body);
    //     tripDocument.save(function(err) {
    //         if(err) {
    //             res.redirect(`/trips/${tripDocument._id}`)
    //         } else {
    //             res.redirect(`/trips/${tripDocument._id}/day/${itinerary}`)
    //         }
    //     })
    // })
}

// function create(req, res) {

//     Trip.findById(req.params.id, function(err, tripDocument) {
//         console.log(req.params.dayId);
//         let index = tripDocument.itinerary.map(itinerary => itinerary.id).indexOf(req.params.dayId)
//         console.log(index, '<--- This is the index')
//         let itinerary = tripDocument.itinerary[index]._id;
//         let day = tripDocument.itinerary[index].day;
//         let events = tripDocument.itinerary[index].events;
//         events.push(req.body);
//         tripDocument.save(function(err) {
//             if(err) {
//                 res.redirect(`/trips/${tripDocument._id}`)
//             } else {
//             console.log(tripDocument._id, '<---- Trip ID!!!!!!!!!');
//             console.log(day, '<---- DAY ID!!!!!!!')
//             res.redirect(`/trips/${tripDocument._id}/day/${itinerary}`)
//             }
//         })
//     })
// };