const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
        this.internCard = 
        `<div class='row'>  
        <div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
            <div class='card intern'>
                <div class='card-body'>
                <h4 class='card-title text-center'>${name}</h4>
                <h5 class='text-center'><i class="fas fa-user-graduate"></i>  Intern</h5>
                    <div class='card'>
                        <ul class='list-group list-group-flush'>
                            <li class='list-group-item'>Employee ID:  ${id}</li>
                            <li class='list-group-item'>Email:  ${email}<a href="mailto:${email}"></a></li>
                            <li class='list-group-item'>School:  ${this.school}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    getSchool() { return this.school };
    getRole() { return this.role };
    render() { return this.internCard };
}

module.exports = Intern;