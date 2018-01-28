const db = require('../models/mockDB');

exports.description = "This is the the controller for Students.";

exports.printStudentDetails = (req, res) => res.render('_student', ({data: db.students[req.params.id]}));

exports.printAllStudents = (req, res) => res.render('_all_students', ({data: db.students}));