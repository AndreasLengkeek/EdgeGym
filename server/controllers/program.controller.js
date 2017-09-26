const Program = require('../models/program');

module.exports = {
    getPrograms: function(req, res) {
        Program.find().exec((err, programs) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.json({
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
            return res.json({
                program
            });
        });
    },
    newProgram: function(req, res) {
        return res.json({ body: req.body });
    },
    connectProgramFile: function(req, res) {
        return res.json({
            connecting: req.file.originalname,
            to: req.params.id
        });
    },
    deleteProgramById: function(req, res) {

    }
}
