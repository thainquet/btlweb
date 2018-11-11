const con = require("../module/module.connectDB")
const query = require("../module/module.query")
const path = require('path')


var controller = {
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
                    }
                    count ++
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
    }
    
}

module.exports = controller;