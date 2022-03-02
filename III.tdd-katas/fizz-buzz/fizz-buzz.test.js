const {fizzbuzz} = require("./fizz-buzz");

describe("Function fizzbuzz", () => {
  it("Giving 1 should return 1, Fizz", () => {
    //Arrange
    const number = 1;

    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual("1");
  });

  it("Giving 2 should return '1, 2' ", () => {
    //Arrange
    const number = 2;

    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual("1, 2");
  });
});

