const { convertToOldRoman } = require('./romanNumbers');

describe('convertToOldRoman function', () => {
    it("Giving 3001 should throw an error", () => {
        //Arrange
        const number = 3001;

        //Act
        const result = () => convertToOldRoman(number);

        //Assert
        expect(result).toThrow('Number should not be less than 0 and bigger than 3000');
    });
    it("Giving 1 should return I", () => {
        //Arrange
        const number = 1;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('I');
    });
    it("Giving 3 should return III", () => {
        //Arrange
        const number = 3;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('III');
    });

    it("Giving 6 should return VI", () => {
        //Arrange
        const number = 6;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('VI');
    });
});