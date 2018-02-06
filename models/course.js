exports.course = function(courseName, courseID, credits, professor){

    //No private declaration so I'll use _ to imply private.
    this._courseName = courseName || "";
    this._courseID = courseID || -999;
    this._credits = credits || -999;
    this._professor = professor || null;

    this.toString = () => { return "Course Name: " + this.courseName + " | Course ID: " + this.courseID
        + " | Credits: " + this.credits; };

    this.setCourseName = (name) => {this._courseName = name; return this;};
    this.getCourseName = () => {return this._courseName;};

    this.setCourseID = (id) => {this._courseID = id; return this;};
    this.getCourseID = () => {return this._courseID};

    this.setCredits = (c) => {this._credits = c; return this;};
    this.getCredits = () => {return this._credits};

    this.setProfessor = (p) => {this._professor = p; return this;};
    this.getProfessor = () => {return this._professor};
};