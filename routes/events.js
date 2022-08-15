const router = require('express').Router();
const eventController = require('../controllers/events');

router.get('/trips/:id/events/new', eventController.new)

module.exports = router;