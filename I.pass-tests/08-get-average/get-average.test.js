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
});
