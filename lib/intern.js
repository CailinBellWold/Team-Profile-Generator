const TeamMember = require('./teammember');

class Intern extends TeamMember {
    constructor(name, eid, email, school) {
        super(name, eid, email);
        this.school = school;
    }
}

module.exports = Intern;