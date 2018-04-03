const GoogleStrategy   = require('passport-google-oauth20').Strategy;

const db         = require('../models');
const configAuth = require('./auth');

const user_attr = [
    'id', 
    'googleId', 'stravaId',
    'firstName', 'lastName', 'displayName', 
    'email', 'photo'
];

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        console.log('passport.serializeUser');
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        console.log('passport.deserializeUser');
        db.User.findById(id).then(function(user) {
            done(null, user);
        }, done);
    });

    passport.use(new GoogleStrategy({
        clientID        : configAuth.googleAuth.clientID,
        clientSecret    : configAuth.googleAuth.clientSecret,
        callbackURL     : configAuth.googleAuth.callbackURL
    },
    function(token, refreshToken, profile, done) {
        console.log('passport.use')
        console.log(profile)
        // make the code asynchronous
        // db.User.findOne won't fire until we have all our data back from Google
        process.nextTick(function() {
            // try to find the user based googleId or email
            db.User.findOne({
                attributes: user_attr,
                where: { 
                    [db.Sequelize.Op.or]: [
                        { googleId : profile.id },
                        { email    : profile.emails[0].value }
                    ]
                }
            }).then( (user) => {
                if (user) {
                    // if user is found, log in
                    // update user if some fields are missing
                    db.User.update({ 
                            displayName : user.display_name || profile.displayName,
                            firstName   : user.first_name || profile.name.familyName,
                            lastName    : user.last_name || profile.name.givenName,
                            email       : user.email || profile.emails[0].value,
                            photo       : user.photo || profile.photos[0].value
                        },
                        { 
                            where: { googleId: profile.id } 
                        }
                    ).then(function(result) {
                        console.log('\nUser updated!\n');
                        return done(null, user);
                    }, err =>{
                        console.log('db.User.update');
                        console.log(err);
                        return done(err);                        
                    });
                    // return done(null, user);
                }
                else{
                    //no record found, so add new record
                    console.log('\nNEW USER!\n');
                    const new_user = {
                        googleId    : profile.id,
                        displayName : profile.displayName,
                        firstName   : profile.name.familyName,
                        lastName    : profile.name.givenName,
                        email       : profile.emails[0].value,
                        photo       : profile.photos[0].value                        
                    };
                    console.log(new_user)
                    db.User.create(
                        new_user
                    ).then(user_created => {
                        console.log('user-created: '+ user_created);
                        return done(null, user_created);
                    }, err => {
                        console.log('db.User.create')
                        console.log(err);
                        return done(err);
                    });
                    // return done(null, new_user);
                }
            }, err => {
                console.log('db.User.findOne')
                console.log(err);
                return done(err);
            });
        });

    }));

};


