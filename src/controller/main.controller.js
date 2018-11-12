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
            let sql = "SELECT * FROM event"
            query(con,sql)
            .then(res => {
                let metadata = {
                    success: true,
                    data: res
                }
                return metadata
                
            })
            .then( data => res.send(data))
        }
        catch (error) {

        }
    },
    getEventbyID : (req,res) => {
        try {
            let sql = "SELECT * FROM event Where idEvent = " + req.params.idEvent;
            //let i = req.params.idEvent;
            query(con,sql)
            .then(res => {
                let metadata = {
                    success: true,
                    data: res
                }
                return metadata
                
            })
            .then( data => res.send(data))
            //console.log(sql + i)
        } catch (error) {
            res.send({
                success: false,
                message: error
            })
        }
    },
    getQuestionsOfEvent : (req, res) => {
        try {
            let sql = "SELECT * FROM `event` e JOIN event_question q ON e.idEvent = q.idEvent WHERE e.idEvent = " + req.params.idEvent;
            //let i = req.params.idEvent;
            query(con,sql)
            .then(res => {
                let data = [];
                let count = 0;
                res.forEach( i => {
                    data[count] = {
                        idEvent: i.idEvent,
                        idComment: i.idComment,
                        contentQuest: i.contentQuest
                    };
                    count ++;
                })
                let metadata = {
                    success: true,
                    data: data
                }
                return metadata                            
            })
            .then( data => res.send(data))
            //console.log(sql + i)
        } catch (error) {
            res.send({
                success: false,
                message: error
            })
        }
    },
    createNewQuestionOfEvent : (req,res) => {
        let idEvent = req.params.idEvent;
        let content = "" + req.body.content;
        let sql = `INSERT INTO event_question (idEvent, contentQuest) VALUES (` + idEvent + `,"` + content + `")`
        query(con,sql)
        .then(() => {
            res.send({
                success: true,
                message: "add new question successfully!"
            })
        })
    },
    deleteQuestionById : (req,res) => {
        let idQuest = req.params.idQuest;
        let sql = "DELETE FROM `event_question` WHERE `event_question`.`idQuestion` = " + idQuest;
        query(con,sql)
        .then(() => {
            res.send({
                success: true,
                message: "delete successfully!"
            })
        })
        //console.log(sql)
    }
  }


module.exports = controller;