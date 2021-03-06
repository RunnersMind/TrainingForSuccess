const GoogleStrategy   = require('passport-google-oauth20').Strategy;

const db       = require('../models');
let configAuth = {
    googleAuth: {
        clientID: process.env.googleClientId,
        clientSecret: process.env.googleClientSecret,
    }
};
try {
    configAuth = require('./auth');
} catch (e) {}

console.log('clientID ' + configAuth.googleAuth.clientID);

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
        callbackURL     : '/auth/google/callback',
        proxy: true
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
                            googleId    : user.googleToken || profile.id,
                            googleToken : token,
                            displayName : user.displayName || profile.displayName,
                            firstName   : user.firstName || profile.name.givenName,
                            lastName    : user.lastName || profile.name.familyName,
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
                        googleToken : token,
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


