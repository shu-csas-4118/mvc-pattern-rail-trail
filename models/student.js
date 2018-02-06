exports.student = function Student(firstName, lastName, ID, courses){

    if(courses.length < 2) throw Error("Not enough courses supplied!");

    //No private declaration so I'll use _ to imply private.
    this._firstName= firstName || "";
    this._lastName = lastName || "";
    this._ID = ID || 0;
    this._courses = courses || [];

    this.toString = () => {return  "Name: " + this._firstName + " " + this._lastName + " | ID: " + this._ID;};

    this.getFirstName = () => {return this._firstName};
    this.setFirstName = (name) => {this._firstName = name; return this;};

    this.getLastName = () => {return this._lastName};
    this.setLastName = (name) => {this._lastName = name; return this;};

    this.getID = () => {return this._ID};
    this.setID = (id) => {this._ID = id; return this;};

    this.getCourses = () => {return this._courses};
    this.addCourse = (newCourse) => {this._courses.push(newCourse); return this;};
};
