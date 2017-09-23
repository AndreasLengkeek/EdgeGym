const Program = require('../models/program');

module.exports = {
    getPrograms: function(req, res) {
        Program.find().exec((err, programs) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.send({
                programs
            });
        })
    },
    findProgramById: function(req, res) {
        console.log('looking for program', req.params.id);
        Program.find({ _id: req.params.id }).exec((err, program) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json({
                program
            });
        });
    },
    newProgram: function(req, res) {

    },
    deleteProgramById: function(req, res) {

    }
}
