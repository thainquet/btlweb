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
  getAllEvent: (req, res) => {
    try {
      let sql = "SELECT * FROM event"
      query(con, sql)
        .then(res => {
          let metadata = {
            success: true,
            data: {
              id: res[0].id,
              name: res[0].name,
              type: res[0].type,
              content: res[0].content
            }
          }
          return metadata;
        })
        .then(data => res.send(data))
    } catch (error) {

    }
  }

}

module.exports = controller;