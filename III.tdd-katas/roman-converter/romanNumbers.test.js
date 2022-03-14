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
    it("Giving 15 should return XV", () => {
        //Arrange
        const number = 15;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('XV');
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
    it('Giving 50 should return "L"', () => {
        //Arrange
        const number = 50;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('L');
    })
    it('Giving 64 should return "LXIIII"', () => {
        //Arrange
        const number = 64;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('LXIIII');
    })

    it('Giving 88 should return "LXXXVIII"', () => {
        //Arrange
        const number = 88;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('LXXXVIII');
    })
    it('Giving 100 should return "C"', () => {
        //Arrange
        const number = 100;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('C');
    })
    it('Giving 106 should return "C"', () => {
        //Arrange
        const number = 106;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('CVI');
    })
    it('Giving 116 should return "CXVI"', () => {
        //Arrange
        const number = 116;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('CXVI');
    })

    it('Giving 122 should return "CXXII"', () => {
        //Arrange
        const number = 122;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('CXXII');
    })

    it('Giving 125 should return "CXXV"', () => {
        //Arrange
        const number = 125;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('CXXV');
    })
    it('Giving 255 should return "CCLV"', () => {
        //Arrange
        const number = 155;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('CLV');
    })
    it('Giving 455 should return "CCLV"', () => {
        //Arrange
        const number = 455;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('CCCCLV');
    })

    it('Giving 503 should return "DIII"', () => {
        //Arrange
        const number = 503;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('DIII');
    });

    it('Giving 553 should return "DIII"', () => {
        //Arrange
        const number = 553;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('DLIII');
    })

    it('Giving 888 should return "DCCCLXXXVIII"', () => {
        //Arrange
        const number = 888;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('DCCCLXXXVIII');
    })

    it('Giving 2000 should return "MM"', () => {
        //Arrange
        const number = 2000;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('MM');
    });
    it('Giving 3000 should return "MMM"', () => {
        //Arrange
        const number = 3000;

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe('MMM');
    });
});