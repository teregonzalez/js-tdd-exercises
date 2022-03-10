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

    it("Giving 5 should return V", () => {
        //Arrange
        const number = 5;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('V');
    });

    it("Giving 6 should return VI", () => {
        //Arrange
        const number = 6;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('VI');
    });

    it("Giving 8 should return VIII", () => {
        //Arrange
        const number = 8;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('VIII');
    });

    it("Giving 9 should return VIIII", () => {
        //Arrange
        const number = 9;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('VIIII');
    });

    it("Giving 10 should return X", () => {
        //Arrange
        const number = 10;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('X');
    });

    it("Giving 12 should return XII", () => {
        //Arrange
        const number = 12;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('XII');
    });

    it("Giving 18 should return XVIII", () => {
        //Arrange
        const number = 18;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('XVIII');
    });

    it("Giving 32 should return XXXII", () => {
        //Arrange
        const number = 32;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('XXXII');
    });
});