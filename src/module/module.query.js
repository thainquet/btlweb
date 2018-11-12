const con = require("./module.connectDB")

function query(con, sql) {
  return new Promise((resolve, reject) => {
    con.query(sql, function (err, result) {
      if (err) return reject(err);
      return resolve(result);
    });
  })
}

module.exports = query;