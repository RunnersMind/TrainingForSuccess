module.exports = function(app, passport) {

    app.get('/auth/google', 
        passport.authenticate('google', { 
            scope : ['profile', 'email'] 
    }));

    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect : 'http://localhost:3000/user',
            failureRedirect : '/'
    }));

    app.get('/api/logout', function(req, res, next) {
        req.logout();
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            }
            res.redirect('/');
        });
        // res.send(req.user);
        // res.redirect('/');
    });

    app.get('/api/current_user', function(req, res) {
        res.send(req.user);
    });

};

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}


