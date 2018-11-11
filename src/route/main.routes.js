let express = require('express');
let controller = require('../controller/main.controller')
let auth = require("../controller/auth.controller")

let router = express.Router();

router.post('/login', auth.login)

router.get('/events', controller.getAllEvent)

router.get('/events/:idEvent', controller.getEventbyID)

router.get('/events/:idEvent/comments', controller.getQuestionsOfEvent)

//router.get('/', controller.getIndex);

// router.post('/events/newQuestion', controller.postNew)

// router.put('/events/update/:id', controller.updateOne)

// router.delete('/ads/delete/:id', controller.deleteById)


module.exports = router;