exports.professor = function(firstName, lastName, email, phoneNum){
    this.firstName = firstName || "";
    this.lastName = lastName || "";
    this.email = email || "nobody@not-set.com";
    this.phoneNum = phoneNum || '000-000-0000';

    this.toString = function(){
        return "Professor Name: " + this.firstName + " " + this.lastName +
            " | Email: " + this.email + " | Number: " + this.phoneNum;
    };
};