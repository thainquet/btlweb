let express = require('express');
let controller = require('../controller/main.controller')
let auth = require("../controller/auth.controller")

let router = express.Router();

router.post('/login', auth.login)

router.post('/register', auth.newAccount)

router.get('/accounts/detail/:id', auth.checkInfoAccout)

router.put('/accounts/detail/:id/change',auth.changeInfoAccount)

router.get('/events', controller.getAllEvent)

router.get('/events/:idEvent', controller.getEventbyID)

router.get('/events/:idEvent/questions', controller.getQuestionsOfEvent)

router.post('/events/:idEvent/questions/newQuestion', controller.createNewQuestionOfEvent)

router.delete('/events/:idEvent/questions/delete/:idQuest', controller.deleteQuestionById)


module.exports = router;