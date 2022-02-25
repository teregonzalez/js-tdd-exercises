const {getSecondThird} = require("./get-second-third");

describe("Function getSecondThird", () => {
    it("Giving [90, 5, 11, 8, 6] should return [6, 8]", () => {
        //Arrange
        const input = [90, 5, 11, 8, 6];
        const output = [6, 8];

        //Act
        const result = getSecondThird(input);
        
        //Assert 
        expect(result).toEqual(output);
    });

    it("Giving [90, 5, 11, 8, 6] should return [6, 8]", () => {
        //Arrange
        const input = [1,4,3,7,8];
        const output = [3,4];
        const original = [1,4,3,7,8];

        //Act
        const result = getSecondThird(input);
        
        //Assert 
        expect(result).toEqual(output);
        expect(input).toEqual(original);
    });
    it("Giving a number as a parameter should throw an error", () => {
        //Arrange
        const input = 7;

        //Act
        const result = () => getSecondThird(input);
        
        //Assert 
        expect(result).toThrow("Error")
    })
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
