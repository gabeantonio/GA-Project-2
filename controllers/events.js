const Trip = require('../models/trip');

module.exports = {
    new: newEvent
}

function newEvent(req, res) {
    res.render('events/new-events.ejs')
}