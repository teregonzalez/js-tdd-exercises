const {getEven} = require("./get-even-numbers");

describe("Function getEven", () => {
    it("Giving [22, 13, 73, 82, 4] should return [22, 82, 4]", () => {
        //Arrange
        const input = [22, 13, 73, 82, 4];
        const expected = [22, 82, 4];

        //Act
        const result = getEven(input);

        //Assert
        expect(result).toEqual(expected);
    })
});
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
