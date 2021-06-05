const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
        this.managerCard = //does this string need to be saved as its own module to get the string literal to function?
        `<div class='row'>
        <div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
            <div class='card manager'>
                <div class='card-body'>
                    <h4 class='card-title text-center'>${name}</h4>
                    <h5 class='card-title text-center'>Manager</h5>
                    <div class='card'>
                        <ul class='list-group list-group-flush'>
                            <li class='list-group-item'>Employee ID:  ${id}</li>
                            <li class='list-group-item'>Email:  ${email} <a href="mailto:#"></a></li>
                            <li class='list-group-item'>Office Number:  ${this.officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    getOfficeNumber() { return this.officeNumber };
    getRole() { return this.role };
    render() { return this.managerCard };
}

module.exports = Manager;