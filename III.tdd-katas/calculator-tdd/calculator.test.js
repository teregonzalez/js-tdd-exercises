const {calculator} = require("./calculator");

describe("Function calculator", () => {

    it("Giving '' should return 0", () => {
        //Arrange
        const numbers = "";

        //Act
        const result = calculator(numbers);

        //Assert
        expect(result).toEqual(0);
    });

    it("Giving 1 should return 1", () => {
        //Arrange
        const numbers = "1";

        //Act
        const result = calculator(numbers);

        //Assert
        expect(result).toEqual(1);
    });
    it("Giving 1 and 1 should return 2", () => {
        //Assert
        const numbers = "1,1";

        //Act
        const result = calculator(numbers);

        //Assert
        expect(result).toEqual(2);
    });
    it("Giving 3, 4 and 6 should return 13", () => {
        //Arrange
        const numbers = "3, 4, 6";

        //Act
        const result = calculator(numbers);

        //Assert
        expect(result).toEqual(13);
    });
});