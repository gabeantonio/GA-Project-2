const Trip = require('../models/trip');

module.exports = {
    index
}

function index(req, res) {
    res.render('trips/my-trips.ejs')
}