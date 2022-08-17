const router = require('express').Router();
const eventController = require('../controllers/events');

router.get('/trips/:id/day/:dayId/events/new', eventController.new);
router.post('/trips/:id/day/:dayId', eventController.create);

module.exports = router;

