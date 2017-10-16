const Program = require('../models/Program');
const Client = require('mongoose').model('Client');
module.exports = {
    getPrograms: function(req, res) {
        // return programs in db - also populate referenced models
        Program.find()
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
        // find user id from client provided
        Client.findById(req.params.id).exec((err, client) => {
            if (err) {
                return res.status(500).json(err);
            }
            const userId = client.user;
            // return programs in db - also populate referenced models
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
        // return programs in db - also populate referenced models
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
        // find single program
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
        // creating a new program record
        if (req.file) {
            // if file has been added to database then return the id reference
            return res.json({
                success: true,
                fileid: req.file.filename
            })
        } else {
            // after file has been added to database connect it to a program record
            const newProgram = new Program(req.body);
            newProgram.save((err, saved) => {
                if (err) {
                    return res.status(500).send(err);
                }
                return res.json({ saved });
            });
        }
    }
}
