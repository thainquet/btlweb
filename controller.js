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
    
}

module.exports = controller;