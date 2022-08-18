const router = require('express').Router();
const editController = require('../controllers/edits');

router.get('/trips/:id/day/:dayId/events/edit', editController.edit)
router.post('/trips/:id/day/:dayId', editController.update);

module.exports = router;