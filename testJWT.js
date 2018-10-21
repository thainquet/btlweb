var jwt = require('jsonwebtoken');
let token = jwt.sign({
        username: "admin",
        password: "admin"
    }, "test", {
        expiresIn: "24h"
    }, (err, token) => {
        jwt.verify(token, "test", (err,decode) => {
            console.log(decode)
        })
    })
