var express = require('express');
var controller = require('../controller/main.controller')


var router = express.Router();


router.get('/', controller.getIndex);

router.get('/events', controller.getAllEvent)

// router.post('/events/newQuestion', controller.postNew)

// router.put('/events/update/:id', controller.updateOne)

// router.delete('/ads/delete/:id', controller.deleteById)


module.exports = router;