const {removeVowelsForWords} = require('./remove-vowels-in-array')

describe('Function removeVowels', () => {
  it('Giving the array ["Irina", "Etza", "Daniel"] should return ["rn", "tz", "Dnl"]', () => {
  // Arrange
  const input = ["Irina", "Etza", "Daniel"];
  const expected = ["rn", "tz", "Dnl"];

  // Act
  const result = removeVowelsForWords(input);
  // Assert
  expect(result).toEqual(expected);
  });

  it("Giving a number as a parameter should throw an error", () => {
    //Arrange
    const input = 55;

    //Act
    const result = () => removeVowelsForWords(input);

    //Assert
    expect(result).toThrow("Error");
  })
});

