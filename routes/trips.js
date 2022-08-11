const router = require('express').Router();
const tripController = require('../controllers/trips')

router.get('/', tripController.index);
router.get('/new', tripController.new)

module.exports = router;