const inquirer = require('npm/inquirer')
const team = require('./team');

const team = new Team(answer.teamName);

team.welcome();
team.addManager();
team.addEngineer();
team.addIntern();

team.genHTML();