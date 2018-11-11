const con = require("../module/module.connectDB");


var auth = {
    login: (req, res) => {
        let usn = req.body.username;
        let pass = req.body.password;
        console.log(usn + " " + pass);
        let sql = "SELECT * FROM `user` WHERE username = (?)";
        query(con, sql, usn).then(data => {
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
                            username: data[0].username
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

    register: (req, res) => {
        console.log('abc');
        let usn = req.body.username;
        let pass = req.body.password;
        let values = [usn, pass];
        let sql = "SELECT * FROM `user` WHERE username = (?)";
        let add = "INSERT INTO `user` VALUES(?,?)"
        query(con, sql, usn).then(data => {
            if(data.length == 0) {
                add = con.format(add, values);
                con.query(add, function(err, results) {
                    if(err) console.log(err);
                    else {
                        console.log("Insert successfully");
                        res.send({
                            success: true
                        })
                    }
                })
            } else {
                res.send({
                    success: false,
                    message: "Insert failed"
                })
            }
        })
    }

}

function query(con, sql, i) {
    return new Promise((resolve, reject) => {
        con.query(sql, i, function (err, result) {
            if (err) return reject(err);
            return resolve(result);
        });
    })
}

module.exports = auth;