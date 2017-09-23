const Program = require('../models/program');

module.exports = {
    getPrograms: function(req, res) {
        Program.find().exec((err, programs) => {
            if (err) {
                res.status(500).send(err);
            }
            res.send({
                programs
            });
        })
    },
    findProgramById: function(req, res) {

    },
    newProgram: function(req, res) {

    },
    deleteProgramById: function(req, res) {

    }
}
