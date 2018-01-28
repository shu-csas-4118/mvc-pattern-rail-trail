exports.student = function Student(firstName, lastName, ID, courses){


    this.firstName= firstName || "";


    this.lastName = lastName || "";
    this.ID = ID || 0;
    this.courses = courses || [];

    this.toString = function(){
        return  "Name: " + this.firstName + " " + this.lastName + " | ID: " + this.ID;
    }
};
