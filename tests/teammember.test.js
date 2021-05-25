const TeamMember = require('../lib/teammember');

describe("TeamMember", () => {
    describe("Name", () => {
        it("Should set the Name via the constructor function", () => {
        const input = "Cailin Bell Wold";
        const expected = {"eid": 1, "email": "name@name.com", "name": "Cailin Bell Wold"};
        
        const result = new TeamMember(input, 1, "name@name.com");

        expect(result).toEqual(expected);
        });
    });

    describe("Employee ID", () => {
        it("Should set the Employee ID via the constructor function", () => {
        const input = 100;
        const expected = {"eid": 100, "email": "name@name.com", "name": "First Last"};
        
        const result = new TeamMember("First Last", input, "name@name.com");

        expect(result).toEqual(expected);
        });
    });

    describe("Email", () => {
        it("Should set the Email via the constructor function", () => {
        const input = "cmbellwold@gmail.com";
        const expected = {"eid": 1, "email": "cmbellwold@gmail.com", "name": "First Last"};
        
        const result = new TeamMember("First Last", 1, input);

        expect(result).toEqual(expected);
        });
    });
});