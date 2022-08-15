const Trip = require('../models/trip');


module.exports = {
    show
}

function show(req, res) {
    res.render('days/show-day.ejs')
}