const TeamMember = require('./teammember');

class Manager extends TeamMember {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }
}

module.exports = Manager;