const Trip = require('../models/trip');


module.exports = {
    show
}

function show(req, res) {
    Trip.findById(req.params.id, function (err, tripDocument) {
        let index = tripDocument.itinerary.map(itinerary => itinerary.id).indexOf(req.params.dayId);
        let day;
        let events;
        let itinerary;
        if (tripDocument.itinerary[index]._id == req.params.dayId) {
            day = tripDocument.itinerary[index].day;
            events = tripDocument.itinerary[index].events;
            itinerary = tripDocument.itinerary[index];
        }
        res.render('days/show-day.ejs', { title: 'Trip', trip: tripDocument, day, events, itinerary });
    })
}


