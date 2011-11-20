var fs = require("fs");
var express = require("express");

var app = express.createServer();

app.configure(function() {
	app.use("/static", express.static(__dirname + '/static'));
});

var index = fs.readFileSync("./static/index.html");
app.get("/", function(req, res) {
	res.end(index);
});

app.listen(process.env.PORT);
