const {removeVowels} = require('./remove-vowels');

describe("Function removeVowels", () => {
  it("remove vowels from word", () => {
    //Arrange
    const word = 'samuel';
    const expected = '_a_ue_';

    //Act
    const result = removeVowels(word);

    //Assert
    expect(result).toEqual(expected);
  })

});