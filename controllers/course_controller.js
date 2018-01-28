const db = require('../models/mockDB');

exports.description = "This is the the controller for Courses.";

exports.printCourseDetails = (req, res) => res.render('_course', ({data: db.courses[req.params.id]}));

exports.printAllCourses = (req, res) => res.render('_all_courses', ({data: db.courses}));

exports.displayRegistrationForm = (req, res) => res.render('register',({course: db.courses, student: db.students}));

exports.sayError = (req, res) => res.render('error');

exports.handleRegistrationForm = function(req, res){
    const body = req.body;
    const student = body.studentID, course = body.courseID;

    let s = db.students[student].courses;

    if(s.includes(db.courses[course]))
        res.redirect('/error');
    else{
        s.push(db.courses[course]);
        res.redirect('/student/' + student);
    }
};
