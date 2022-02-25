const {removeVowels} = require('./remove-vowels');

describe("Function removeVowels", () => {
  it("Giving the word 'samuel' would return 'sml'", () => {
    //Arrange
    const word = 'samuel';
    const expected = 'sml';

    //Act
    const result = removeVowels(word);

    //Assert
    expect(result).toEqual(expected);
  });

  it("Giving the word 'SAmuel' would return 'sml'", () => {
    //Arrange
    const word = 'sAmuel';
    const expected = 'sml';

    //Act
    const result = removeVowels(word);

    //Assert
    expect(result).toEqual(expected);
  });
  it("Giving an array as a parameter should throw an error", () => {
    //Arrange
    const word = ["Hey", 4];

    //Act
    const result = () => removeVowels(word);

    //Assert
    expect(result).toThrow("Error")

  })
});
