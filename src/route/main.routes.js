let express = require('express');
let controller = require('../controller/main.controller');
let auth = require("../controller/auth.controller");

let router = express.Router();

//-------------------------------------------------------------

router.post('/login', auth.login)

router.post('/register', auth.newAccount)

//-------------------------------------------------------------

router.get('/accounts/detail/:id', auth.checkInfoAccout)

router.post('/accounts/detail/change',controller.changeInforAccount2)

router.get('/accounts/:id/myquestions', controller.getQuestionByUser)

//-------------------------------------------------------------

router.get('/events', controller.getAllEvent)

router.get('/events/:idEvent', controller.getEventbyID)
router.get('/events/users/getAll', controller.getAllUser)
router.get('/events/questions/getAll', controller.getAllQuest)

router.put('/events/:idEvent/open', controller.openEventById)

router.put('/events/:idEvent/close', controller.closeEventById)

router.get('/events/:idEvent/questions', controller.getQuestionsOfEvent)

router.post('/events/user/add', controller.createNewUser);
router.post('/events/:idEvent/questions/newQuestion', controller.createNewQuestionOfEvent)

router.delete('/events/:idEvent/questions/delete/:idQuest', controller.deleteQuestionById)

router.get('/events/questions/getLikes/:idQuest', controller.getAllLikeByQuestionId)

router.post('/events/questions/getLikes/:idQuest/like', controller.pressLikeByQuestionId)

router.post('/events/questions/getLikes/:idQuest/unlike', controller.pressUnlikeByQuestionId)

router.get('/events/questions/getAllComment/:idQuest', controller.getAllCommentByQuestionId)

//-----------------------------------------------------------------------------------------

router.post('/events/questions/:idQuest/newComment', controller.createNewComment)

router.get('/events/questions/:idQuest/status', controller.getEventStatusByQuestionID)

router.get('/event/questions/:idQuest', controller.getQuestionByID)

router.post('/events/newEvents', controller.createNewEvent)

//router.post('/user/newUser', controller.createNewUser)

module.exports = router;