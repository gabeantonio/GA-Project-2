const Trip = require('../models/trip');


module.exports = {
    show
}

function show(req, res) {
    Trip.findById(req.params.id, function(err, tripDocument) {
            let day;

            for (let i = 0; i < tripDocument.itinerary.length; i++) {
                if (tripDocument.itinerary[i]._id == req.params.dayId) {
                    day = tripDocument.itinerary[i].day
                }
            }
            res.render('days/show-day.ejs', {title: 'Trip', trip: tripDocument, day});
    })
};



