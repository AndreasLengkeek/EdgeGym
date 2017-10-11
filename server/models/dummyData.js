const User = require('./User');
const Client = require('./Client');
const Program = require('./Program');

module.exports = function() {
    User.count().exec((err, count) => {
        if (count > 0) {
            return;
        }

        let newUser = new User({
            username: 'TrainerTOm',
            firstname: 'Tom',
            lastname: 'Trainer',
            email: 'test',
            password: 'test'
        });

        newUser.save((err) => {
            if (err) { return; }
            console.log('Adding dummy data');

            let newClient = new Client({
                username: 'Jimmy2000',
                email: 'jimmy@email.com',
                password: 'password',
                firstname: 'Jimmy',
                lastname: 'Neutron',
                phone: '0455 767 987',
                address: '6 Testing Rd, Sydney 2000',
                gender: 'Male',
                coach: newUser._id
            });

            newClient.save((err) => {
                if (err) { return; }

                let newProgram = new Program({
                    fileid: 'testfile',
                    createdby: newUser._id,
                    client: newClient._id
                });

                newProgram.save((err) => {
                    if (err) { return; }
                });
            });
        });
    });
}
