const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("GitHubUserName", () => {
        it("Should set the GitHubUserName via the constructor function", () => {
        const input = "CailinBellWold";
        const expected = {"name": "Name", "id": 1, "email": "name@name.com", "github": "CailinBellWold"};
        
        const result = new Engineer("Name", 1, "name@name.com", input);

        expect(result).toEqual(expected);
        });
    });
});