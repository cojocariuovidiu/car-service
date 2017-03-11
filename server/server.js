var express = require("express");
var app = express();

app.get("/", function(req, resp){
    resp.json({
        "message": "Hey"
    });
});

app.get("/test", function(req, resp){
    resp.json({
        "test": "Hey test mnodean..."
    });
});

app.listen(3000);