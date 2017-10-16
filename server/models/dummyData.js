const User = require('./User');
const Client = require('./Client');
const Program = require('./Program');

module.exports = function() {
    User.count().exec((err, count) => {
        if (count > 0) {
            return;
        }

        let newUser = new User({
            username: 'AdminTom',
            firstname: 'Tom',
            lastname: 'Admin',
            email: 'test',
            password: 'test',
            permissions: {
                role: 'admin'
            }
        });

        newUser.save((err, admin) => {
            if (err) { return; }
            console.log('Adding dummy data');

            let newUserClient = new User({
                username: 'Jimmy2000',
                email: 'jimmy@email.com',
                password: 'password',
                firstname: 'Jimmy',
                lastname: 'Neutron',
                permissions: {
                    role: 'user'
                }
            });

            newUserClient.save((err, saved) => {
                let newClient = new Client({
                    phone: '0455 767 987',
                    address: '6 Testing Rd, Sydney 2000',
                    gender: 'Male',
                    user: saved._id,
                    coach: admin._id
                });

                newClient.save((err) => {
                    if (err) { return; }
                });
            })
        });
    });
}
