const { passwordVerifier } = require('./passwordVerifier-function');

describe('passwordVerifier function', () => {
    it('Giving "1234565" should return "Not ok"', () =>{
        //Arrange
        const password = '1234565';

        //Act
        const result = passwordVerifier(password);

        //Assert
        expect(result).toBe('Not ok');
    });

    it('Giving a null password should return "Not ok"', () =>{
        //Arrange
        const password = "";

        //Act
        const result = passwordVerifier(password);

        //Assert
        expect(result).toBe('Not ok');
    });

    it('Giving a C1234567 password should return "Not ok"', () =>{
        //Arrange
        const password = "C1234567";

        //Act
        const result = passwordVerifier(password);

        //Assert
        expect(result).toBe('Not ok');
    });

    it('Giving a Contrasena password should return "Ok"', () =>{
        //Arrange
        const password = "Contrasena";

        //Act
        const result = passwordVerifier(password);

        //Assert
        expect(result).toBe('Ok');
    });

    it('Giving a "HolaHolaaa" password should return "Ok"', () =>{
        //Arrange
        const password = "HolaHolaaa";

        //Act
        const result = passwordVerifier(password);

        //Assert
        expect(result).toBe('Ok');
    });

    it('Giving a "u1234567" password should return "Ok"', () =>{
        //Arrange
        const password = "u1234567";

        //Act
        const result = passwordVerifier(password);

        //Assert
        expect(result).toBe('Ok');
    });
    it('Giving a "Hu1234" password should return "Ok"', () =>{
        //Arrange
        const password = "Hu1234";

        //Act
        const result = passwordVerifier(password);

        //Assert
        expect(result).toBe('Ok');
    });

});

