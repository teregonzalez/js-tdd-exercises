const {removeVowels} = require('./remove-vowels');

describe("Function removeVowels", () => {
  it("Giving the word 'samuel' would return '_a_ue_'", () => {
    //Arrange
    const word = 'samuel';
    const expected = '_a_ue_';

    //Act
    const result = removeVowels(word);

    //Assert
    expect(result).toEqual(expected);
  });

  it("Giving the word 'SAmuel' would return '_A_ue_'", () => {
    //Arrange
    const word = 'sAmuel';
    const expected = '_A_ue_';

    //Act
    const result = removeVowels(word);

    //Assert
    expect(result).toEqual(expected);
  });

});