exports.professor = function(firstName, lastName, email, phoneNum){

    //No private declaration so I'll use _ to imply private.
    this._firstName = firstName || "";
    this._lastName = lastName || "";
    this._email = email || "nobody@not-set.com";
    this._phoneNum = phoneNum || '000-000-0000';

    this.toString = () => { return "Professor Name: " + this._firstName + " " + this._lastName +
            " | Email: " + this._email + " | Number: " + this._phoneNum; };

    this.getFirstName = () => {return this._firstName};
    this.setFirstName = (name) => {this._firstName = name; return this;};

    this.getEmail = () => {return this._email};
    this.setEmail = (em) => {this._email = em; return this;};

    this.getPhoneNumber = () => {return this._phoneNum};
    this.setPhoneNumber = (num) => {this._phoneNum = num; return this;};
};
