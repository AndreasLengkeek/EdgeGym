const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('../../config');
const User = require('mongoose').model('User');

const facebookOptions = {
    clientID: config.facebookAuth.clientID,
    clientSecret: config.facebookAuth.clientSecret,
    callbackURL: config.facebookAuth.callbackUrl,
    profileFields : ['id', 'displayName', 'name']
}

const facebookStrategy = new FacebookStrategy(
    facebookOptions,
    function(accessToken, refreshToken, profile, done) {
        User.findOne({ facebookId: profile.id }).exec((err, user) => {
            if (err) return done(err, false);

            if (user){
                return done(null, user);
            } else {
                let newUser = new User();
                newUser.facebookId = profile.id;
                newUser.username = profile.displayName;
                newUser.firstname = profile.name.givenName;
                newUser.lastname = profile.name.familyName;
                newUser.save((err, user) => {
                    if (err) return done(err, false);

                    return done(null, user);
                });
            }
        });
});

module.exports = facebookStrategy;
