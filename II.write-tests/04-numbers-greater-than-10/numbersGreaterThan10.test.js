
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
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
