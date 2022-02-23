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
    });
    it("Giving a string should throw an error", () => {
        //Arrange
        const input = "Hello";

        //Act
        const result = () => getEven(input);

        //Assert
        expect(result).toThrow("Error");
    });
    it("Giving no parameters should throw an error", () => {
        //Act
        const result = () => getEven();

        //Assert
        expect(result).toThrow("Error");

    })
});
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
