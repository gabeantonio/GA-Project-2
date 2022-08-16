const router = require('express').Router();
const eventController = require('../controllers/events');

router.get('/trips/:id/day/events/new', eventController.new);

module.exports = router;