const con = require("../module/module.connectDB")
const query = require("../module/module.query")
const path = require('path')


var controller = {
  getIndex: (req, res) => {
    try {
      res.sendFile(path.join(__dirname + '../../../public/login.view.html'));
    } catch (error) {
      res.send({
        success: false,
        reason: error.message
      })
    }
  },
  
    getAllEvent : (req, res) => {

        try {
            let sql = `SELECT idEvent, name as event_name, type, content, status, id as id_creator, 
            username as creator FROM event e JOIN user u on e.id_creator = u.id`
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
            let sql = `SELECT idEvent, name as event_name, type, content, status, id as id_creator, 
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
        let sql = `INSERT INTO event_question (idEvent, contentQuest, id_user) VALUES (` + idEvent + `,"` + content + `",`+ id_user+ `)`
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
    }
}


module.exports = controller;