const jwt = require('jsonwebtoken');

let token = jwt.sign({
    username: "admin",
})