const PasswordVerifier = require('./passwordVerifier');

describe('PasswordVerfifier class test', () => {
    it('Should exist', () => {
        // Arrange
        const passwordVerifier = new PasswordVerifier('');
        // Act
        const isInstanceOfPasswordVerifier = passwordVerifier instanceof PasswordVerifier; // Confirma el tipo de un objeto en tiempo de ejecución
        // Assert
        expect(isInstanceOfPasswordVerifier).toBe(true);
    });
    it('Giving a null password should throw an error', () => {
        // Arrange
        const passwordVerifier = new PasswordVerifier(null);
        // Act and assert
        expect(() => passwordVerifier.isNotNull()).toThrow('Password is null');
    });
    it('Giving a 6 length password should throw an error', () => {
        // Arrange
        const passwordVerifier = new PasswordVerifier('123456');
        const limit = 8;
        // Act and assert
        expect(() => passwordVerifier.isLengthLargerThan(limit)).toThrow('Password is too short. must contain 8 digits');
    });

    it('Giving 12345678 should throw an error', () =>{
        // Arrange
        const passwordVerifier = new PasswordVerifier('12345678');
        // Act and assert
        expect(() => passwordVerifier.itContainsLowercaseLetter()).toThrow('Password must contain a lowercase letter');
    });

    it('Giving 12345678e should throw an error', () =>{
        // Arrange
        const passwordVerifier = new PasswordVerifier('12345678e');
        // Act and assert
        expect(() => passwordVerifier.itContainsLowercaseLetter()).not.toThrow('Password must contain a lowercase letter');
    });

    it('Giving 1234567o should throw an error', () =>{
        // Arrange
        const passwordVerifier = new PasswordVerifier('1234567o');

        // Act and assert
        expect(() => passwordVerifier.itContainsUppercaseLetter()).toThrow('Password must contain an uppercase letter');
    });

    it('Giving Hellohello should throw an error', () => {
        // Arrange
        const passwordVerifier = new PasswordVerifier('Hellohello');

        // Act and asser
        expect(() => passwordVerifier.itContainsANumber()).toThrow('Password must contain a number');
    })

    it('Giving H5678976 should return "Not ok"', () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier('H678976');

        //Act
        expect(passwordVerifier.verify()).toBe('Not ok');
    });

    it('Giving Hu1234 should return "Ok"', () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier('Hu1234');

        //Act and Assert
        expect(passwordVerifier.verify()).toBe('Ok');
    });
    it('Giving u1234567 should return "Ok"', () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier('u1234567');

        //Act and assert
        expect(passwordVerifier.verify()).toBe('Ok');
    });

    it('Giving HolaHolaaa should return "Ok"', () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier('HolaHolaaa');

        //Act and assert
        expect(passwordVerifier.verify()).toBe('Ok');
    });

    it('Giving null should return "Not ok"', () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier(null);

        //Act and assert
        expect(passwordVerifier.verify()).toBe('Not ok');
    });

    it('Giving Contrasena should return "Ok"', () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier('Contrasena');
        
        //acts and assert
        expect(passwordVerifier.verify()).toBe('Ok');
    })
});