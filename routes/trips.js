const router = require('express').Router();
const tripController = require('../controllers/trips')

router.get('/', tripController.index);

module.exports = router;