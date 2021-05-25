const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("OfficeNum", () => {
        it("Should set the Office Number via the constructor function", () => {
        const input = "42";
        const expected = {"eid": 1, "email": "name@name.com", "officeNum": "42", "name": "Name"};
        
        const result = new Manager("Name", 1, "name@name.com", input);

        expect(result).toEqual(expected);
        });
    });
});