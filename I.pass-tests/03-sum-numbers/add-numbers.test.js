const {addNumbers} = require("./add-numbers");

describe("addNumbers function", () => {
  it("Giving [9, 23, 10, 3, 8] to the function, should return 53", () => {
    //Arrange
    const numbers = [9, 23, 10, 3, 8];
    const expected = 53;
    
    //Act
    const output = addNumbers(numbers);
    
    //Assert
    expect(output).toEqual(expected);
  });

  it("Giving [34, 'gato'] should throw an error", () => {
    //Arrange
    const numbers = [34, 'gato'];

    //Act
    const output = () => addNumbers(numbers);

    //Assert
    expect(output).toThrow("Error");
  });
});
