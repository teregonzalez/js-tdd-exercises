const {secondLargest} = require("./second-largest");

describe("Function secondLargest", () => {
  it("Giving [2, 0, 23, 0, 57, 1, 230] should return 57", () => {
    //Arrange
    const numbers = [2, 0, 23, 0, 57, 1, 230];

    //Act
    const output = secondLargest(numbers);

    //Assert
    expect(output).toEqual(57);
  });

  it("Giving [2, 0, 'house'] should throw an error", () => {
    //Arrange
    const numbers = [2, 0, 'house'];

    //Act
    const output = () => secondLargest(numbers);

    //Assert
    expect(output).toThrow("Error")
  })
});
