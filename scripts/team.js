const Employee = require('./employee');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');

class Team {
    constructor(teamName, Manager, Engineer, Intern) {
      this.teamName = teamName;
    }
  
    addManager(Manager) {
    }

    addEngineer(Engineer) {
    }

    addIntern(Intern) {
    }
  
    genHTML() {
    }
  
    welcome() {
      console.log(`Welcome to ${this.teamName}!`);
    }
  }
  
  module.exports = Team;