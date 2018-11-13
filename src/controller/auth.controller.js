const con = require("../module/module.connectDB");


var auth = {
  login: (req, res) => {
    let usn = req.body.username;
    let pass = req.body.password;
    console.log(usn + " " + pass);
    let sql = "SELECT * FROM `user` WHERE username = (?)";
    queryT(con, sql, usn).then(data => {
      if (data.length == 0) {
        res.send({
          success: false,
          message: "user does not exist"
        })
      } else {
        if (data[0].password == pass) {
          res.send({
            success: true,
            data: {
              // Them id cua Quynh vao cho nay
              id: data[0].id,
              username: data[0].username,
              isAdmin: data[0].isAdmin,
              isTeacher: data[0].isTeacher
            }
          })
        } else {
          res.send({
            success: false,
            message: "wrong username or password"
          })
        }
        console.log(sql);
      }
    })
    console.log(usn + " " + pass)
  },
  newAccount: (req, res) => {
    let usn = req.body.username;
    let pass = req.body.password;
    let mail = req.body.email;
    let type = req.body.type;
    let sqlStudent = `INSERT INTO user (id, username, password, email, isAdmin, isTeacher) VALUES (NULL,"` + usn + `", "` + pass + `", "` + mail + `", '0', '0')`;
    let sqlTeacher = `INSERT INTO user (id, username, password, email, isAdmin, isTeacher) VALUES (NULL,"` + usn + `", "` + pass + `", "` + mail + `", '0', '1')`;
    let sqlAdmin = `INSERT INTO user (id, username, password, email, isAdmin, isTeacher) VALUES (NULL,"` + usn + `", "` + pass + `", "` + mail + `", '1', '0')`;
    if (type == "admin") {
      queryP(con, sqlAdmin).then(data => {
          res.send({
            success: true,
            message: `add admin: ${usn} successfully`
          })
        })
        .catch(err => {
          res.send({
            success: false,
            message: err
          })
        })
    } else if (type == "teacher") {
      queryP(con, sqlTeacher).then(data => {
          res.send({
            success: true,
            message: `add teacher: ${usn} successfully`
          })
        })
        .catch(err => {
          res.send({
            success: false,
            message: err
          })
        })
    } else {
      queryP(con, sqlStudent).then(data => {
          res.send({
            success: true,
            message: `add student: ${usn} successfully`
          })
        })
        .catch(err => {
          res.send({
            success: false,
            message: err
          })
        })
    }
  },
  checkInfoAccout: (req, res) => {
    let id = req.params.id;
    let sql = `SELECT username,email,isAdmin,isTeacher FROM user WHERE id = ` + id;
    queryP(con, sql)
      .then(data => {
        res.send({
          success: true,
          data: data
        })
      })
      .catch(err => {
        res.send({
          success: false,
          message: err
        })
      })
  },
  changeInfoAccount: (req, res) => {
    let id = req.params.id;
    let pass = "";
    let mail = "";
    let sql = "";
    if (!req.body.password) {

    } else pass = req.body.password
    if (!req.body.email) {

    } else mail = req.body.email
    if (pass == "") {
      sql = `UPDATE user SET email = "` + mail + `" WHERE user.id =` + id;
    } else if (mail == "") {
      sql = `UPDATE user SET password = "` + pass + `" WHERE user.id =` + id;
    } else sql = `UPDATE user SET password = "` + pass + `", email ="` + mail + `" WHERE user.id =` + id;
    //console.log(sql)
    queryP(con, sql)
      .then(data => {
        res.send({
          success: true,
          message: "change info successfully!"
        })
      })
      .catch(err => {
        res.send({
          success: false,
          message: err
        })
      })
  }

}

function queryT(con, sql, i) {
  return new Promise((resolve, reject) => {
    con.query(sql, i, function (err, result) {
      if (err) return reject(err);
      return resolve(result);
    });
  })
}

function queryP(con, sql) {
  return new Promise((resolve, reject) => {
    con.query(sql, function (err, result) {
      if (err) return reject(err);
      return resolve(result);
    });
  })
}

module.exports = auth;