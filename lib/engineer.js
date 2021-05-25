const TeamMember = require('./teammember');



class Engineer extends TeamMember {
    constructor(name, eid, email, gitHubUserName) {
        super(name, eid, email);
        this.gitHubUserName = gitHubUserName;
    }
}

module.exports = Engineer;