const router = require('express').Router();
const itineraryController = require('../controllers/itineraries');

router.get('/trips/:id/itineraries/new', itineraryController.new);
router.post('/trips/:id', itineraryController.create);


module.exports = router;