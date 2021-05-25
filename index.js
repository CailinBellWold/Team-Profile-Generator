const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const TeamMember = require('./lib/teammember');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
// const Team = require('./scripts/team');

const teamArr = [];

// Creates file Asynchronously (we used this structure in class)
const writeFileAsync = util.promisify(fs.writeFile);

const welcome =  () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'welcome',
            message: 'Welcome to your automated Team Profile Generator. \n You will be asked to input information about your team, starting with your Team Manager. \n These questions will help to complete your customized MyTeam.html. \n Let\'s begin! Press ENTER to continue.',
        },
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
        return;
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
            name: 'gitHubUserName',
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
        const {name, eid, email, gitHubUserName, school } = answers;

        if ((answers) => answers.role === 'Engineer') {
            const engineer = new Engineer (name, eid, email, gitHubUserName);
            teamArr.push(engineer); 
            
            if (answers.queryMoreReports === 'Yes') {
                addReports();
                return;
            } else {
                return;
            }
        
        } else if ((answers) => answers.role === 'Intern') {
            const intern = new Intern (name, eid, email, school);
            teamArr.push(intern);

            if (answers.queryMoreReports === 'Yes') {
                addReports();
                return;
            } else {
                return;
            }
        }
    })
};

// Function to initialize app
const init = () => {
    welcome()
        .then(addManager)
        // .then(() => console.log((teamArr)))
        // .then((answers) => writeFileAsync('./dist/MyTeam.html', generateHTML(answers)))
        // .then(() => console.log('Successfully wrote MyTeam.html to your dist folder'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();

// welcome();
// addManager();
// addReports();
// writeFileAsynch('./dist/MyTeam.html', generateHTML(answers));
