const Manager = require('../lib/manager');

describe("Manager", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id, email address and office number if provided valid arguments", () => {
            const manager = new Manager("Cailin Bell Wold", 3, "cmbellwold@gmail.com", "654");

            expect(manager.name).toEqual("Cailin Bell Wold");
            expect(manager.id).toEqual(3);
            expect(manager.email).toEqual("cmbellwold@gmail.com");
            expect(manager.officeNumber).toEqual("654");
            expect(manager.role).toEqual("Manager");
            expect(manager.managerCard).toEqual(
            `<div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
                <div class='card manager'>
                    <div class='card-body'>
                        <h4 class='card-title text-center'>Cailin Bell Wold</h4>
                        <h5 class='card-title text-center'><i class="fas fa-tasks"></i>&nbsp Manager</h5>
                        <div class='card'>
                            <ul class='list-group list-group-flush'>
                                <li class='list-group-item'>EMPLOYEE ID:&nbsp 3</li>
                                <li class='list-group-item'>EMAIL:&nbsp <a href="mailto:cmbellwold@gmail.com">cmbellwold@gmail.com</a></li>
                                <li class='list-group-item'>OFFICE NUMBER:&nbsp 654</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
        )
        })
    });

    describe("OfficeNum", () => {
        it("Should set the Office Number via the constructor function", () => {
            const input = "42";
            const result = new Manager("Name", 1, "name@name.com", input).getOfficeNumber();

            expect(input).toEqual(result);
        });
    });
});