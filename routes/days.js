const router = require('express').Router();
const dayController = require('../controllers/days');

router.get('/trips/:id/day/:id', dayController.show)


module.exports = router;