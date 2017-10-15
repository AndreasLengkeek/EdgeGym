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
                let newUser = new User({
                    facebookId: profile.id,
                    username: profile.displayName,
                    firstname: profile.name.givenName,
                    lastname: profile.name.familyName,
                    permissions: {
                        role: 'user'
                    }
                });
                newUser.save((err, user) => {
                    if (err) return done(err, false);

                    return done(null, user);
                });
            }
        });
});

module.exports = facebookStrategy;
