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
        if (req.file) {
            console.log('Creating file:', req.file.originalname);
            return res.json({
                success: true,
                fileid: req.file.filename
            })
        } else {
            console.log('Connecting program to:', req.body.client);
            console.log('With file:', req.body.fileid);
            const newProgram = new Program(req.body);

            newProgram.save((err, saved) => {
                if (err) {
                    return res.status(500).send(err);
                }
                return res.json({ saved });
            });
        }
    },
    deleteProgramById: function(req, res) {

    }
}
