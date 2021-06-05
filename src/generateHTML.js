const fs = require('fs');
const index = require('../index');
const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');
const Manager = require('../lib/manager');
const Intern = require('../lib/intern');
// return fs.writeFile ('./dist/MyTeam.html', generate(teamArr) {

// Generates HTML for My-Team
const generate = (teamArr) => {
    
    return `
    <!doctype html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="description" content="My Team Profile">   
            <meta name="keywords" content="My Team Profile">
            <meta name="author" content="Cailin Bell Wold">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        
            <!--Stylesheets-->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?&family=Poppins:wght@200;300;400;500&family=Roboto:wght@300;400;500;700&display=swap" >
            <link rel="stylesheet" href="styles/style.css">
            <title>My Team</title>
            <!--<link rel="shortcut icon" type="image/png" href="images/favicon.png"/> -->
        </head>
        
        <body>
        <header class="jumbotron">
            <div class="container">
                <div class="row align-self-center">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </header>
        
        <main>
        ${teamArr[0].managerCard}
            <hr class='mt-1 mb-4'/>
        ${teamArr[1].engineerCard}
            <hr class='mt-1 mb-4'/>
        ${teamArr[2].internCard}
        </main>
        
        </body>
        </html>`
    }
    // .then(() => console.log('Successfully wrote MyTeam.html to your dist folder'))
    // .catch((err) => console.error(err))
// };
const generateHTML = (teamArr) => {
    console.log(teamArr);
    fs.writeFile('./dist/MyTeam.html', generate(teamArr), function(err, result) {
        if(err) console.log('error', err);
    });
    // return fs.writeFile ('./dist/MyTeam.html', generate(teamArr))
};


module.exports = generateHTML;