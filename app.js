//Import Express / Middleware
const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});
const bodyParse = require('body-parser');

//Import Controllers
const studentController = require(path.join(__dirname, 'controllers', 'student_controller'));
const professorController = require(path.join(__dirname, 'controllers', 'professor_controller'));
const courseController = require(path.join(__dirname,'controllers', 'course_controller'));

//Initiate Express
const app = express();

//Setup Express
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParse.urlencoded({extended : true}));

//Routes (probably should be handled in another file but it's ok)
app.get("/", (req, res) => {res.render('home');});
app.get("/student/:id", studentController.printStudentDetails);
app.get("/professor/:id", professorController.printProfessorDetails);
app.get("/course/:id", courseController.printCourseDetails);
app.get("/courses", courseController.printAllCourses);
app.get("/professors", professorController.printAllProfessors);
app.get("/students", studentController.printAllStudents);
app.get("/register", courseController.displayRegistrationForm);
app.get("/error", courseController.sayError);
app.post("/register", courseController.handleRegistrationForm);

//500 Error Handler
app.use((err, req, res, next) => {res.status(500).render('500');});
//404 Error Handler
app.use((req, res) => {res.status(404).render('404');});

function begin(){
    const port = '7070';
    app.listen(port);
    console.log("Listening on port " + port);
}
//Launch Server
begin();