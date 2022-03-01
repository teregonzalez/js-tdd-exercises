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
    it("Giving '12,3' should return 6", () => {
        //Arrange
        const numbers = "12,3";

        //act
        const result = calculator(numbers)

        //Assert
        expect(result).toEqual(15);
    })
    it('Giving "1\n2,3" should return 3', () => {
        //Arrange
        const numbers = "1\n2,3";

        //Act
        const result = calculator(numbers);

        //Assert
        expect(result).toEqual(6);
    })
    it('Giving "88,10" should return 98', () => {
        //Arrange
        const numbers = "88,10";

        //Act
        const result = calculator(numbers);

        //Assert
        expect(result).toEqual(98);
    })
    it('Giving "88,rutyeiruter10" should return 98', () => {
        //Arrange
        const numbers = "88,rutyeiruter10";

        //Act
        const result = calculator(numbers);

        //Assert
        expect(result).toEqual(98);
    })
    it('Giving "-88,rutyeiruter10" should throw an error', () => {
        //Arrange
        const numbers = "-88.5,rutyeiruter10";

        //Act
        const result = () => calculator(numbers);

        //Assert
        expect(result).toThrow("negatives not allowed: -88.5");
    })
    it('Giving "33,1001" should return 33', () => {
        //Arrange
        const numbers = "33,1001";

        //Act
        const result = calculator(numbers);

        //Assert
        expect(result).toEqual(33);
    })
});