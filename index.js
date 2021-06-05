const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateHTML = require('./src/generateHTML');

const teamArr = [];

const welcome =  () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'welcome',
            message: 'Welcome to your automated Team Profile Generator. \n You will be asked to input information about your team, starting with your Team Manager. \n These questions will help to complete your customized MyTeam.html. \n Let\'s begin! Press ENTER to continue.',
        },
    ])
    .then(addManager)
};

// Questions Awaiting User Input (Manager is Required First)
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Input Team Manager\'s name.',
        },
        {
            type: 'input',
            name: 'id',
            message: ({ name }) => `Input ${name}\'s employee ID.`,
        },
        {
            type: 'input',
            name: 'email',
            message: ({ name }) => `Input ${name}\'s email address.`,
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: ({ name }) => `Input ${name}\'s office number.`,
        },
        {
            type: 'list',
            name: 'queryMoreReports',
            message: 'Would you like to add more team members?',
            choices: ['Yes', 'No'],
        },
    ])
    .then(answers => {
    const {name, id, email, officeNumber} = answers;
    const manager = new Manager(name, id, email, officeNumber);
    teamArr.push(manager);
    if (answers.queryMoreReports === 'Yes') {
        addReports();
    } else {
        return;
    }
    })
};

const addReports = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'title',
            message: 'Team member\'s title (select one):',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: ({ title }) => `Input ${title}\'s name.`,
        },
        {
            type: 'input',
            name: 'id',
            message: ({ name }) => `Input ${name}\'s employee ID.`,
        },
        {
            type: 'input',
            name: 'email',
            message: ({ name }) => `Input ${name}\'s email address.`,
        },
        {
            type: 'input',
            name: 'github',
            message: ({ name }) => `Input ${name}\'s GitHub username.`,
            when: (input) => input.title === 'Engineer',
        },
        {
            type: 'input',
            name: 'school',
            message: ({ name }) => `Input ${name}\'s school.`,
            when: (input) => input.title === 'Intern',
        },
        {
            type: 'list',
            name: 'queryMoreReports',
            message: 'Would you like to add more team members?',
            choices: ['Yes', 'No'],
        },
    ])
    .then(answers => {
        if (answers.title === 'Engineer') {
            const {name, id, email, github} = answers;
            const engineer = new Engineer (name, id, email, github);
            teamArr.push(engineer); 
        
        } else if (answers.title === 'Intern') {
            const {name, id, email, school} = answers;
            const intern = new Intern (name, id, email, school);
            teamArr.push(intern);
        };
        (answers.queryMoreReports === 'Yes') ? addReports() : generateHTML(teamArr);
    })
};

// Function to initialize app
const init = () => welcome()

// Function call to initialize app
init();