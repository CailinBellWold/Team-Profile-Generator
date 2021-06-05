const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
        this.engineerCard = 
        `<div class='row'>
        <div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
            <div class='card engineer'>
                <div class='card-body'>
                    <h4 class='card-title text-center'>${name}</h4>
                    <h5 class='text-center'><i class="fas fa-laptop-code"></i>Engineer</h5>
                    <div class='card'>
                        <ul class='list-group list-group-flush'>
                            <li class='list-group-item'>Employee ID: ${id}</li>
                            <li class='list-group-item'>Email:  ${email}<a href="mailto:${email}"></a></li>
                            <li class='list-group-item'>GitHub Username:  ${this.github} <a href="${this.github}"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    getGithub() { return this.github };
    getRole() { return this.role };
    render() { return this.engineerCard }
}

module.exports = Engineer;