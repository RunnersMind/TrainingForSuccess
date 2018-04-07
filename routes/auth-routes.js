module.exports = function(app, passport) {

    app.get('/', function(req, res){
        //default page for all users
        res.json({msg: "Hello World!"});
    });

    app.get('/profile', isLoggedIn, function(req, res) {
        res.json({ msg: "Logged In(google)", user: req.user });
    });

    app.get('/auth/google', 
        passport.authenticate('google', { 
            scope : ['profile', 'email'] 
    }));

    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect : 'http://localhost:3000/program',
            failureRedirect : '/'
    }));

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

};

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}


