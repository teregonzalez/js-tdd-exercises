const {largerThanTen} = require("./numbersGreaterThan10");

describe("largerThanTen function", () => {
    it('Giving the array [4, 10, 32, 9, 21], would return [32, 21]', () => {
        //Arrange
        const input = [4, 10, 32, 9, 21];
        const output = [32, 21];

        //Act
        const result = largerThanTen(input);

        //Assert
        expect(result).toEqual(output)
    });
    it("Giving a string should throw an error", () => {
        //Arrange
        const input = "Hello!";

        //Act
        const result = () => largerThanTen(input);

        //Assert
        expect(result).toThrow("Error")
    })
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
