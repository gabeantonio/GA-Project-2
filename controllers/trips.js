const Trip = require('../models/trip');

module.exports = {
    index,
    new: newTrip,
    create
}

function index(req, res) {
    res.render('trips/my-trips.ejs')
}

function newTrip(req, res) {
    res.render('trips/new-trip.ejs');
}

function create(req,res) {
    // Log what was submitted so you can see. 
    console.log(req.body, '<--- This is what was submitted.');

    // Create a new Trip in the Database.
    Trip.create(req.body, function(err, tripDocument) {
        if(err) {
            console.log('Error in the Create Trip Controller!');
            return res.render('trips/new-trip.ejs')
        }
        console.log(tripDocument, '<--- Trip created in Database.');
        res.redirect('/trips');
    })
}