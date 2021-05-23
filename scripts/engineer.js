const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHubUserName) {
        super(name, id, email);
        this.gitHubUserName = gitHubUserName;
    }
}

module.exports = Engineer;