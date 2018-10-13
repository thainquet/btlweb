const con = require("./connectDB")


var controller = {
    getIndex: (req, res) =>{
        try {
            res.sendFile(__dirname + '/public/index.html');
        }
        catch (error) {
            res.send({
                success: false,
                reason: error.message
            })
        }
    },
    getAllEvent : (req, res) => {
        try {

        }
        catch (error) {

        }
    }
    
}

module.exports = controller;