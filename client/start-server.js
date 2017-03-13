var express = require("express");
var path  = require("path");
var app = express();

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(8447);
console.log("server listening on port 8447");