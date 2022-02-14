const {findNeedle} = require("./find-needle");

describe("Function findNeedle", () => {

  it('Giving the array ["house", "train", "slide", "needle", "book"] should return 3', () => {
    //Arrange
    const words = ["house", "train", "slide", "needle", "book"];
    const expected = 3;

    //Act
    const output = findNeedle(words, "needle");

    //Assert
    expect(output).toEqual(expected);
  });

  it('Giving the array ["plant", "shelf", "arrow", "bird"] should return 0', () => {
    //Arrange
    const words = ["plant", "shelf", "arrow", "bird"];
    const expected = 0;

    //Act
    const output = findNeedle(words, "plant");

    //Assert
    expect(output).toEqual(expected);

  });
  
});

