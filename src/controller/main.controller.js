const con = require("../module/module.connectDB")
const query = require("../module/module.query")
const path = require('path')


var controller = {
    getAllEvent: (req, res) => {
        try {
            let sql = `SELECT e.idEvent, name as event_name, type, content, status, id as id_creator, 
            username as creator, count(eq.idEvent) as question_count FROM event e JOIN user u on e.id_creator = u.id 
            left join event_question eq on eq.idEvent = e.idEvent group by eq.idEvent`;
            query(con, sql)
                .then(data => {
                    let metadata = {
                        success: true,
                        data: data
                    }
                    return metadata

                })
                .then(data => res.send(data))
        } catch (error) {
            res.send({
                success: false,
                message: error
            })
        }
    },
    getEventbyID: (req, res) => {
        try {
            let sql = `SELECT name as event_name, type, content, status, id as id_creator, 
            username as creator FROM event e JOIN user u on e.id_creator = u.id Where 
            idEvent = ` + req.params.idEvent;
            //let i = req.params.idEvent;
            query(con, sql)
                .then(data => {
                    let metadata = {
                        success: true,
                        data: data
                    }
                    return metadata

                })
                .then(data => res.send(data))
            //console.log(sql + i)
        } catch (error) {
            res.send({
                success: false,
                message: error
            })
        }
    },
    openEventById: (req, res) => {
        try {
            let sql = `UPDATE event SET status = '1' WHERE event.idEvent = ` + req.params.idEvent;
            query(con, sql)
                .then(data => {
                    res.send({
                        success: true,
                        message: "Open successfully!"
                    })
                })
        } catch (error) {
            res.send({
                success: false,
                message: error
            })
        }
    },
    closeEventById: (req, res) => {
        try {
            let sql = `UPDATE event SET status = '0' WHERE event.idEvent = ` + req.params.idEvent;
            query(con, sql)
                .then(data => {
                    res.send({
                        success: true,
                        message: "Close successfully!"
                    })
                })
        } catch (error) {
            res.send({
                success: false,
                message: error
            })
        }
    },
    getQuestionsOfEvent: (req, res) => {
        try {
            let sql = "SELECT idQuestion, username , contentQuest as content_question FROM event_question q JOIN event e ON q.idEvent = e.idEvent JOIN user u ON q.id_user = u.id WHERE q.idEvent =" + req.params.idEvent;
            //let i = req.params.idEvent;
            query(con, sql)
                .then(data => res.send({
                    success: true,
                    data: data
                }))
            //console.log(sql + i)
        } catch (error) {
            res.send({
                success: false,
                message: error
            })
        }
    },
    createNewQuestionOfEvent: (req, res) => {
        let idEvent = req.params.idEvent;
        let content = req.body.content;
        let id_user = req.body.id_user;
        let sql = `INSERT INTO event_question (idEvent, contentQuest, id_user) VALUES (` + idEvent + `,"` + content + `",` + id_user + `)`
        //console.log(sql);

        query(con, sql)
            .then(() => {
                res.send({
                    success: true,
                    message: "add new question successfully!"
                })
            })
    },
    deleteQuestionById: (req, res) => {
        let idQuest = req.params.idQuest;
        let sql = "DELETE FROM `event_question` WHERE `event_question`.`idQuestion` = " + idQuest;
        query(con, sql)
            .then(() => {
                res.send({
                    success: true,
                    message: "delete successfully!"
                })
            })
        //console.log(sql)
    },
    getQuestionByUser: (req, res) => {
        let idUser = req.params.id;
        let sql = `SELECT idQuestion,id_user,username, name as event_name, contentQuest as content_question FROM event_question q join user u on q.id_user = u.id JOIN event e on q.idEvent = e.idEvent WHERE q.id_user = ` + idUser;
        query(con, sql)
            .then(data => {
                if (data.length == 0) {
                    res.send({
                        success: true,
                        message: "You have no questions!"
                    })
                } else {
                    res.send({
                        success: true,
                        data: data
                    })
                }
            })
            .catch(err => {
                res.send({
                    success: false,
                    message: err
                })
            })
        //console.log(sql)
    },
    getAllQuest : (req, res) => {
        let sql = `SELECT q.idQuestion, username , contentQuest as content_question, answer_count,
         name as asked_at, count(el.idQuestion) as like_count FROM event_question q JOIN event e ON q.idEvent = e.idEvent JOIN 
         user u ON q.id_user = u.id left join event_like el on el.idQuestion = q.idQuestion group by q.idQuestion`;
        query(con,sql)
        .then( data => {
            res.send({
                success: true,
                data: data
            })
        }).catch(err => {
            res.send({
                success: false,
                message: err
            })
        })
    },
    getAllLikeByQuestionId : (req,res) => {
        let sql = `SELECT COUNT(*) as total_like FROM event_like l JOIN user u ON 
        l.id_liker = u.id WHERE l.idQuestion = ` + req.params.idQuest;
        query(con,sql)
        .then( data => {
            res.send({
                success: true,
                data: data
            })
        }).catch(err => {
            res.send({
                success: false,
                message: err
            })
        })
    },
    pressLikeByQuestionId : (req, res) => {
        let id_liker = req.body.id_user
        let idQuest = req.params.idQuest
        let sql = `INSERT INTO event_like (idQuestion, id_liker) 
        VALUES ('`+ idQuest+ `', '`+id_liker+`')`
        query(con,sql)
        .then( data => {
            res.send({
                success: true,
                message: "Liked!"
            })
        }).catch(err => {
            res.send({
                success: false,
                message: err
            })
        })
    },
    pressUnlikeByQuestionId : (req, res) => {
        let id_unliker = req.body.id_user
        let idQuest = req.params.idQuest
        let sql = `DELETE FROM event_like WHERE event_like.id_liker = ` + id_unliker
        query(con,sql)
        .then( data => {
            res.send({
                success: true,
                message: "Unliked!"
            })
        }).catch(err => {
            res.send({
                success: false,
                message: err
            })
        })
    },
    getAllCommentByQuestionId : (req, res) => {
        let idQuest = req.params.idQuest
        let sql = `SELECT idComment, username as commentor, id_user as id_commentor, 
        contentComment FROM event_question q JOIN event_comment c ON 
        q.idQuestion = c.idQuestion JOIN user u ON q.id_user = u.id WHERE q.idQuestion = ` + idQuest
        query(con,sql)
        .then( data => {
            res.send({
                success: true,
                message: data
            })
        }).catch(err => {
            res.send({
                success: false,
                message: err
            })
        })
    }
}


module.exports = controller;