const {average} = require("./get-average");

describe ("Average function", () => {
  it('Giving [4, "-", 8, 11, "hello", "57", 0, 2] should return 5', () => {
    //Arrange
    const numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
    const expected = 5;

    //Act
    const output = average(numbers);

    //Assert
    expect(output).toEqual(expected);

  });
  it('Giving ["-", "hello", "hey"] with no number, should throw an error', () => {
    //Arrange
    const numbers = ["-", "hello", "hey"];
    
    //Act
    const output = () => average(numbers);

    //Assert
    expect(output).toThrow("Error");
  })
});
