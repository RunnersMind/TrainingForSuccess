var express 		= require("express");
var session 		= require("express-session");
var bodyParser 		= require("body-parser");

var PORT = process.env.PORT || 3001;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, function(){
	console.log("Listening on port %s", PORT);
});
