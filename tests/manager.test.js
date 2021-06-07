const Manager = require('../lib/manager');

describe("Manager", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id, email address and office number if provided valid arguments", () => {
            const manager = new Manager("Cailin Bell Wold", 3, "cmbellwold@gmail.com", "654");

            expect(manager.name).toEqual("Cailin Bell Wold");
            expect(manager.id).toEqual(3);
            expect(manager.email).toEqual("cmbellwold@gmail.com");
            expect(manager.officeNum).toEqual("654");
        })
    });

    describe("OfficeNum", () => {
        it("Should set the Office Number via the constructor function", () => {
        const input = "42";
        const expected = {"name": "Name", "id": 1, "email": "name@name.com", "officeNumber": "42"};
        
        const result = new Manager("Name", 1, "name@name.com", input);

        expect(result).toEqual(expected);
        });
    });
});