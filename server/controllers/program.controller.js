const Program = require('../models/Program');
const Client = require('mongoose').model('Client');
module.exports = {
    getPrograms: function(req, res) {
        Program
            .find()
            .populate({ path: 'client',
                populate: { path: 'user', select: 'firstname lastname' }
            })
            .populate({ path: 'createdby', select: 'username firstname lastname' })
            .exec((err, programs) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.json({
                programs
            });
        })
    },
    getProgramsByClient: function(req, res) {
        console.log('getting programs for client:', req.params.id);

        Client.findById(req.params.id).exec((err, client) => {
            if (err) {
                return res.status(500).json(err);
            }
            const userId = client.user;
            Program.find({ user: userId })
                .populate({ path: 'user', select: 'firstname lastname' })
                .populate({ path: 'createdby', select: 'username firstname lastname' })
                .exec((err, programs) => {
                    if (err) {
                        return res.status(500).json(err);
                    }
                    return res.json({
                        programs
                    });
                })
        });
    },
    getProgramsByUser: function(req, res) {
        console.log('getting programs for user:', req.params.id);

        Program.find({ user: req.params.id })
            .populate({ path: 'user', select: 'firstname lastname' })
            .populate({ path: 'createdby', select: 'username firstname lastname' })
            .exec((err, programs) => {
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
