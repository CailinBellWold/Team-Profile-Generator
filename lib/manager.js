const TeamMember = require('./teammember');

class Manager extends TeamMember {
    constructor(name, eid, email, officeNum) {
        super(name, eid, email);
        this.officeNum = officeNum;
    }
}

module.exports = Manager;