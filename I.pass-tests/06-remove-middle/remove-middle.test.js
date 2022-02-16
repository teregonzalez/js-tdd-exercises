const {removeMiddle} = require("./remove-middle.js");

describe("Function removeMiddle", () => {
  it('Giving the array ["mouse", "giraffe", "queen", "window", "bottle"], return "queen"', () => {
    //Arrange
    const words = ["mouse", "giraffe", "queen", "window", "bottle"];
    const expectedWords = ["mouse", "giraffe", "window", "bottle"];
    const expectedOutput = ["queen"];

    //Act
    const output = removeMiddle(words);

    //Assert
    expect(output).toEqual(expectedOutput);
    expect(words).toEqual(expectedWords);
    });
});
