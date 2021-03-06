const express 		= require("express");
const session 		= require("express-session");
const bodyParser 	= require("body-parser");
const cookieParser 	= require("cookie-parser");
const morgan       	= require('morgan');
const db 			= require("./models");
const routes 		= require("./routes");

const passport      = require("passport");

const PORT = process.env.PORT || 3001;

const app = express();

// set up express application
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// app.use(express.static("client/build"));
app.enable('trust proxy');

app.use(bodyParser.json());// get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); // read cookies (needed for auth)

app.use(morgan('dev')); // log every request to the console

app.use(session({ secret: 'rynality-super-secret' }));
app.use( passport.initialize());
app.use( passport.session());

require('./config/passport-setup')(passport);
require('./routes/auth-routes.js')(app, passport);

app.use(routes);

db.sequelize.sync().then( function(){
	app.listen(PORT, function(){
		console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	});
});
