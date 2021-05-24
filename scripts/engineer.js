const TeamMember = require('./teammember');

class Engineer extends TeamMember {
    constructor(name, id, email, gitHubUserName) {
        super(name, id, email);
        this.gitHubUserName = gitHubUserName;
    }
}

module.exports = Engineer;