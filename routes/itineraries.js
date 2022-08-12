const router = require('express').Router();
const itineraryController = require('../controllers/itineraries');

router.get('/:id/itineraries/new', itineraryController.new);
router.post('/:id', itineraryController.create);


module.exports = router;