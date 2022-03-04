const { verify } = require('./passwordVerifier');

describe('Verify function', () => {
    it('Giving "Hello1" as a password should return "OK"', () => {
        //Arrange
        const password = "Hello123"

        //Act
        const result = verify(password);

        //Assert
        expect(result).toEqual("Ok")
    });
    it('Giving "12345678" should throw an error', () => {
        //Arrange
        const password = "12345678";

        //Act
        const result = () => verify(password);

        //Assert
        expect(result).toThrow("Password must contain a letter");
    });
    it('Giving "123456et" should return "Ok', () => {
        //Arrange
        const password = "123456et";

        //Act
        const result = verify(password);

        //Assert
        expect(result).toBe("Ok")
    });
    it('Giving "123456" should throw an error', () => {
        //Arrange
        const password = "123456";

        //Act
        const result = () => verify(password);

        //Assert
        expect(result).toThrow("Password is too short. must contain 8 digits");
    });
});