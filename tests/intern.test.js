const Intern = require('../lib/intern');

describe("Intern", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id, email address and school if provided valid arguments", () => {
            const intern = new Intern("Cailin Bell Wold", 3, "cmbellwold@gmail.com", "UW");

            expect(intern.name).toEqual("Cailin Bell Wold");
            expect(intern.id).toEqual(3);
            expect(intern.email).toEqual("cmbellwold@gmail.com");
            expect(intern.school).toEqual("UW");
        })
    });

    describe("School", () => {
        it("Should set the School via the constructor function", () => {
        const input = "University of Washington";
        const expected = {"name": "Name", "id": 1, "email": "name@name.com", "school": "University of Washington"};
        
        const result = new Intern("Name", 1, "name@name.com", input);

        expect(result).toEqual(expected);
        });
    });
});