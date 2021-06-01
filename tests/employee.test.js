const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("Name", () => {
        it("Should set the Name via the constructor function", () => {
        const input = "Cailin Bell Wold";
        const expected = {"name": "Cailin Bell Wold", "id": 1, "email": "name@name.com"};
        
        const result = new Employee(input, 1, "name@name.com");

        expect(result).toEqual(expected);
        });
    });

    describe("Employee ID", () => {
        it("Should set the Employee ID via the constructor function", () => {
        const input = 100;
        const expected = {"name": "First Last", "id": 100, "email": "name@name.com"};
        
        const result = new Employee("First Last", input, "name@name.com");

        expect(result).toEqual(expected);
        });
    });

    describe("Email", () => {
        it("Should set the Email via the constructor function", () => {
        const input = "cmbellwold@gmail.com";
        const expected = {"name": "First Last", "id": 1, "email": "cmbellwold@gmail.com"};
        
        const result = new Employee("First Last", 1, input);

        expect(result).toEqual(expected);
        });
    });
});