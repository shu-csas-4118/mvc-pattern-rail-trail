exports.course = function(courseName, courseID, credits, professor){
    this.courseName = courseName || "";
    this.courseID = courseID || -999;
    this.credits = credits || -999;
    this.professor = professor || null;

    this.toString = function(){
        return "Course Name: " + this.courseName + " | Course ID: " + this.courseID
        + " | Credits: " + this.credits;
    };
};