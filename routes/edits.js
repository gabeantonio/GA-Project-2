const router = require('express').Router();
const editController = require('../controllers/edits');

router.get('/trips/:id/day/:dayId/events/:eventId/edit', editController.edit)
router.put('/trips/:id/day/:dayId/events/:eventId', editController.update);

module.exports = router;