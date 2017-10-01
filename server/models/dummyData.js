const User = require('./user');

module.exports = function() {
    User.count().exec((err, count) => {
        if (count > 0) {
            return;
        }

        var newUser = new User({
            username: 'AndreasLengkeek',
            firstname: 'Andreas',
            lastname: 'Lengkeek',
            email: 'test',
            password: 'test'
        });

        newUser.save((err) => {
            if (err) { return; }
            console.log('Adding dummy data');
        });
    });
}
