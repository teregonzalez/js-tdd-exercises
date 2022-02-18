const {addOne} = require("./add-one.js");
describe("addOne Function", () => {
  it("Giving the array [31, 57, 12, 5], addOne should return [32, 58, 13, 6]", () => {
    //Arrange
    const myArray = [31, 57, 12, 5];
    const unchanged = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];

    //Act
    const output = addOne(myArray);

    //Assert
    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
  });

  it("Giving a 44 to the function should throw an error", () => {
    //Arrang
    const numbers = 44;

    //Act
    const result = () => addOne(numbers);

    //Assert
    expect(result).toThrow("Error")
  });
});
