var express 		= require("express");
var session 		= require("express-session");
var bodyParser 		= require("body-parser");
var cookieParser 	= require("cookie-parser");
var morgan       	= require('morgan');
var db 				= require("./models");

var PORT = process.env.PORT || 3001;

var app = express();

// set up express application
app.use(express.static("public"));

app.use(bodyParser.json());// get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); // read cookies (needed for auth)

app.use(morgan('dev')); // log every request to the console

// require("./controllers/routes.js")(app, passport);

db.sequelize.sync().then( function(){
	app.listen(PORT, function(){
		console.log("Listening on port %s", PORT);
	});
});
