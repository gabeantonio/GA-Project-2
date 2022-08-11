const router = require('express').Router();
const tripController = require('../controllers/trips')

router.get('/', tripController.index);
router.get('/new', tripController.new);

router.post('/', tripController.create);

module.exports = router;