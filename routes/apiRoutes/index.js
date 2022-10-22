const router = require('express').Router();
const routesNotes = require('../apiRoutes/routesNotes');

router.use(routesNotes);

module.exports = router;
