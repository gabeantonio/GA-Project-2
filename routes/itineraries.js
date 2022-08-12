const router = require('express').Router();
const itineraryController = require('../controllers/itineraries');

router.get('/trips/:id/itineraries/new', itineraryController.new)
router.post('/trips/:id/itineraries', itineraryController.create);


module.exports = router;