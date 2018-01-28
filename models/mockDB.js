const Student = require('./student').student;
const Professor = require('./professor').professor;
const Course = require('./course').course;

let students = exports.students = [];
let professors = exports.professors = [];
let courses = exports.courses = [];

professors.push(new Professor("Garett", "Chang", "garett.chang@shu.edu", "508-249-9514"));
professors.push(new Professor("Marco", "Morazan", "mmorazan@shu.edu", "508-182-7953"));
professors.push(new Professor("Manfred", "Minimair", "manfred.minimair@shu.edu", "508-823-9952"));

courses.push(new Course("Software Engineering", 3301, 3, professors[0]));
courses.push(new Course("Automata and Formal Languages", 3302, 4, professors[1]));
courses.push(new Course("Data Mining", 3303, 3, professors[2]));
courses.push(new Course("Intro to Programming", 1101, 4, professors[1]));

students.push(new Student("Adriano", "Soares", 11215853, [courses[0], courses[1]]));
students.push(new Student("Garett", "Chang", 12313213, [courses[1], courses[2]]));
students.push(new Student("Eileen", "Dover", 98360172, [courses[0], courses[2]]));
