const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("School", () => {
        it("Should set the School via the constructor function", () => {
        const input = "University of Washington";
        const expected = {"name": "Name", "eid": 1, "email": "name@name.com", "school": "University of Washington"};
        
        const result = new Intern("Name", 1, "name@name.com", input);

        expect(result).toEqual(expected);
        });
    });
});