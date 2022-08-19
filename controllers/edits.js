const Trip = require('../models/trip');

module.exports = {
    edit: editPlan,
    update: updatePlan
}

function editPlan(req, res) {
    Trip.findById(req.params.id, function (err, tripDocument) {
        console.log(tripDocument, '<--- TRIP')
        const itinerary = tripDocument.itinerary.id(req.params.dayId)
        res.render('events/edits.ejs', { title: 'Trip', trip: tripDocument, itinerary })
    })
}



function updatePlan(req, res) {
    Trip.findById(req.params.id, function (err, tripDocument) {
        let dayDocument = tripDocument.itinerary.id(req.params.dayId);
        console.log(dayDocument, '<---- THIS IS THE DAY YOU WERE ON')
        console.log(req.body, '<---- WHAT WAS SUBMITTED');
        dayDocument.events.shift();
        console.log(dayDocument, '<---- DELETED EVENT IN DAY DOCUMENT');
        dayDocument.events.unshift(req.body);
        console.log(dayDocument, '<---- ADDED NEW ACTIVITES')
        tripDocument.save(function (err) {
            if (err) {
                res.redirect(`/trips/${tripDocument._id}`)
            } else {
                res.redirect(`/trips/${tripDocument._id}/day/${dayDocument._id}`)
            }
        })
    })
}

// function create(req, res) {

//     Trip.findById(req.params.id, function (err, tripDocument) {
//         console.log(tripDocument, '<----- TRIP!!!!!!');
//         console.log(req.params.dayId, '<------ REQ PARAMS DAY ID')
//         let dayDocument = tripDocument.itinerary.id(req.params.dayId)
//         console.log(dayDocument, '<---- DAY DOCUMENT')
//         console.log(req.params.dayId, '<---- DAY ID')
//         dayDocument.events.push(req.body);
//         tripDocument.save(function (err) {
//             if (err) {
//                 res.redirect(`/trips/${tripDocument._id}`)
//             } else {
//                 console.log(tripDocument, '<---- SAVED TRIP')
//                 res.redirect(`/trips/${tripDocument._id}/day/${dayDocument._id}`)
//             }
//         })
//     })
// }









// function update(req, res) {
//     // Note the cool "dot" syntax to query on the property of a subdoc
//     Book.findOne({'comments._id': req.params.id}, function(err, book) {
//       // Find the comment subdoc using the id method on Mongoose arrays
//       // https://mongoosejs.com/docs/subdocs.html
//       const commentSubdoc = book.comments.id(req.params.id);
//       // Ensure that the comment was created by the logged in user
//       if (!commentSubdoc.userId.equals(req.user._id)) return res.redirect(`/books/${book._id}`);
//       // Update the text of the comment
//       commentSubdoc.text = req.body.text;
//       // Save the updated book
//       book.save(function(err) {
//         // Redirect back to the book's show view
//         res.redirect(`/books/${book._id}`);
//       });
//     });
//   }



















// function create(req, res) {

//     Trip.findById(req.params.id, function (err, tripDocument) {
//         console.log(tripDocument, '<----- TRIP!!!!!!');
//         console.log(req.params.dayId, '<------ REQ PARAMS DAY ID')
//         let dayDocument = tripDocument.itinerary.id(req.params.dayId)
//         console.log(dayDocument, '<---- DAY DOCUMENT')
//         console.log(req.params.dayId, '<---- DAY ID')
//         dayDocument.events.push(req.body);
//         tripDocument.save(function (err) {
//             if (err) {
//                 res.redirect(`/trips/${tripDocument._id}`)
//             } else {
//                 console.log(tripDocument, '<---- SAVED TRIP')
//                 res.redirect(`/trips/${tripDocument._id}/day/${dayDocument._id}`)
//             }
//         })
//     })
// }