const { fizzbuzz } = require('./fizz-buzz');

describe('Function fizzbuzz', () => {
  it('Giving 1 should return 1, Fizz', () => {
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
    expect(result).toEqual("1, 2");
  });

  it('Giving 7 should return "1, 2, fizz, 4, buzz, 6" ', () => {
    //Arrange
    const number = 7;

    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual('1, 2, Fizz, 4, Buzz, Fizz, 7');
  });
  it('Giving 15 should return "1, 2, fizz, 4, buzz, 6, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz" ', () => {
    //Arrange
    const number = 15;

    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual('1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz');
  });
  it('Giving an empy parameter should return an error', () => {
    //Arrange
    const number = '';

    //Act
    const result = () => fizzbuzz(number);

    //Assert
    expect(result).toThrow("Error, debes ingresar un número")

  })

});

