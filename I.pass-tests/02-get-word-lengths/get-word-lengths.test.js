const { getWordLengths } = require("./get-word-lengths");

describe("Function getWordLengths", () => {
  it('Giving ["sun", "potato", "roundabout", "pizza"] to the function should return [3, 6, 10, 5]', () => {
    //Arrange
    const words = ["sun", "potato", "roundabout", "pizza"];
    const expected = [3, 6, 10, 5];

    //Act
    const output = getWordLengths(words);

    //Assert
    expect(output).toEqual(expected);
  });
});
