const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const TeamMember = require('./scripts/teammember');
const Manager = require('./scripts/manager');
const Engineer = require('./scripts/engineer');
const Intern = require('./scripts/intern');
// const Team = require('./scripts/team');

const teamArr = [];

// Creates file Asynchronously (we used this structure in class)
const writeFileAsync = util.promisify(fs.writeFile);

const welcome =  () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'teamName',
            message: 'Welcome to your automated Team Profile Generator. \n You will be asked to input information about your team, starting with your Team Manager. \n These questions will help to complete your customized MyTeam.html. \n Let\'s begin! Press ENTER to continue.',
        },
    // ]);
    // const {teamName} = answers;
    // const teamName = new TeamName(teamName);
    // teamArr.push(teamName);
    // addManager();
    ])
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
            name: 'eid',
            message: ({ name }) => `Input ${name}\'s employee ID.`,
        },
        {
            type: 'input',
            name: 'email',
            message: ({ name }) => `Input ${name}\'s email address.`,
        },
        {
            type: 'input',
            name: 'officeNum',
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
    const {name, eid, email, officeNum} = answers;
    const manager = new Manager(name, eid, email, officeNum);
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
            name: 'eid',
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
        const {name, eid, email, github, school } = answers;

        if ((answers) => answers.role === 'Engineer') {
            const engineer = new Engineer (name, eid, email, github);
            teamArr.push(engineer); 
        } else if ((answers) => answers.role === 'Intern') {
            const intern = new Intern (name, eid, email, school);
            teamArr.push(intern);
        }
    }) //TO DO: Figure out How to get it to run through the pushes, THEN still use those answers to decide if it needs to run again.
    .then(answers => {
        if (answers.queryMoreReports === 'Yes') {
            addReports();
            } else {
                return;
            }
    })
};

// Function to initialize app
const init = () => {
    welcome()
        .then(addManager)
        // .then(addReports)
        // .then((answers) => writeFileAsync('./output/MyTeam.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote MyTeam.html to your output folder'))
        .catch((err) => console.error(err));
};

function generateHTML(answers) {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
       ${Engineer.name}>
      </div>
    </div>
    </body>
    </html>`;
}

// Function call to initialize app
init();

// welcome();
// addManager();
// addReports();
// writeFileAsynch('./output/MyTeam.html', generateHTML(answers));
