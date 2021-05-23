const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, teloffice) {
        super(name, id, email);
        this.teloffice = teloffice;
    }
}

module.exports = Manager;