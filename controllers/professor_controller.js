const db = require('../models/mockDB');

exports.description = "This is the the controller for Professors.";

exports.printProfessorDetails = (req, res) => res.render('_professor', ({data: db.professors[req.params.id]}));

exports.printAllProfessors = (req, res) => res.render('_all_professors', ({data: db.professors}));