
var http = require('http');
var onReceive = function(req, res){
    res.write("TransFlower Web");
    res.end();
};
var app = http.createServer(onReceive);
app.listen(9000);
console.log("Test Web Server is Listening on port 9000");