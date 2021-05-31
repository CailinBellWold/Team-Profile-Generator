const fs = require('fs');
const index = require('../index');

// let currentTeamMemberIndex = [];

// Generates HTML for My-Team
const generateHTML = (teamArr) => {
    return (
        `<!doctype html>
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
            <div class='row'>
                <div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
                    <div class='card manager'>
                        <div class='card-body'>
                            <h4 class='card-title text-center'>${Manager.name}</h4>
                            <h5 class='card-title text-center'>Manager</h5>
                            <div class='card'>
                                <ul class='list-group list-group-flush'>
                                    <li class='list-group-item'>Employee ID:  ${Manager.eid}</li>
                                    <li class='list-group-item'>Email:  ${Manager.email} <a href="mailto:#"></a></li>
                                    <li class='list-group-item'>Office Number:  ${Manager.officeNum}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <hr class='mt-1 mb-4'/>
        
            <hr class='mt-1 mb-4'/>
        
        </main>
        
        </body>
        </html>`)
    .then(() => {return fs.promises.readFile('./dist/MyTeam.html')})
    .then(() => {if (Engineer) {return fs.promises.appendFile('./dist/MyTeam.html',
        `<div class='row'>
            <div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
                <div class='card engineer'>
                    <div class='card-body'>
                        <h4 class='card-title text-center'>${Engineer.name}</h4>
                        <h5 class='text-center'><i class="fas fa-laptop-code"></i>Engineer</h5>
                        <div class='card'>
                            <ul class='list-group list-group-flush'>
                                <li class='list-group-item'>Employee ID: ${Engineer.eid}</li>
                                <li class='list-group-item'>Email:  ${Engineer.email}<a href="mailto:${Engineer.email}"></a></li>
                                <li class='list-group-item'>GitHub Username:  ${Engineer.gitHubUserName} <a href="${Engineer.gitHubUserName}"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    )}})
    .then(() => {if (Intern) {return fs.promises.appendFile('./dist/MyTeam.html',
        `<div class='row'>  
            <div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
                <div class='card intern'>
                    <div class='card-body'>
                    <h4 class='card-title text-center'>${Intern.name}</h4>
                    <h5 class='text-center'><i class="fas fa-user-graduate"></i>Intern</h5>
                        <div class='card'>
                            <ul class='list-group list-group-flush'>
                                <li class='list-group-item'>Employee ID:  ${Intern.eid}</li>
                                <li class='list-group-item'>Email:  ${Intern.email}<a href="mailto:${Intern.email}"></a></li>
                                <li class='list-group-item'>School:  ${Intern.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    )}})
};

module.exports = generateHTML;