var express = require("express");
var path  = require("path");
var app = express();

app.get("/", function(req, resp){
    resp.json({
        "message": "Hey"
    });
});

app.get("/test", function(req, res){
    res.json({
        "test": "Hey test mnodean..."
    });
});

app.get("/vendors", function(req, res){
    res.sendFile(path.join(__dirname + "/sample-jsons/sample-vendor.json"));
});

app.get("/users", function(req, res){
    res.sendFile(path.join(__dirname + "/sample-jsons/sample-user.json"));
});

app.listen(3000);