const { fizzbuzz } = require('./fizz-buzz');

describe('Function fizzbuzz', () => {

  it('Giving an empy parameter should return an error', () => {
    //Arrange
    const number = '';

    //Act
    const result = () => fizzbuzz(number);

    //Assert
    expect(result).toThrow('Error, debes ingresar un número')
  });
  it('Giving 1 should return 1', () => {
    //Arrange
    const number = 1;

    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual('1');
  });

  it('Giving 2 should return "1, 2" ', () => {
    //Arrange
    const number = 2;

    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual('1, 2');
  });

  it('Giving 7 should return "1, 2, fizz, 4, buzz, 6" ', () => {
    //Arrange
    const number = 7;

    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual('1, 2, Fizz, 4, Buzz, Fizz, 7');
  });
  it('Giving 15 should return "1, 2, fizz, 4, buzz, 6, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz" ', () => {
    //Arrange
    const number = 15;

    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual('1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz');
  });
  it('Giving 53 should return "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, Fizz, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Buzz, 41, Fizz, Fizz, 44, FizzBuzz, 46, 47, Fizz, 49, Buzz, Fizz, Buzz, Fizz" ', () => {
    //Arrange
    const number = 53;

    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual('1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, Fizz, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Buzz, 41, Fizz, Fizz, 44, FizzBuzz, 46, 47, Fizz, 49, Buzz, Fizz, Buzz, Fizz');
  });

});

