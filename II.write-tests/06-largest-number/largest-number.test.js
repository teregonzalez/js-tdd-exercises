const {getLargestNumber} = require("./largest-number");

describe("Function getLargestNumber", () => {
    it("Giving [3, 21, 88, 4, 36] should return 88", () => {
        //Arrange
        const input = [3, 21, 88, 4, 36];
        const expected = 88;

        //Act
        const result = getLargestNumber(input);

        //Assert
        expect(result).toEqual(expected);
    })

    it("Giving [4, 5, 40, 9] should return 40 and the array remains the same", () => {
        //Arrange
        const input = [4, 5, 40, 9];
        const expected = 40;
        const original = [4, 5, 40, 9];

        //Act
        const result = getLargestNumber(input);

        //Assert
        expect(result).toEqual(expected);
        expect(input).toEqual(original);
    })
    it("Giving a string as a parameter should throw an error", () => {
        //Arrange
        const input = "Hey!";

        //Act
        const result = () => getLargestNumber(input);
        
        //Assert 
        expect(result).toThrow("Error");
    })
})
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;
// also test that the original array hasn't changed
