const {formatCities} = require("./cities");

describe("Function formatCities", () => {
  it("Giving capitals and transform, should return expected", () => {
    //Arrange
    const capitals = [
      { city: "Paris", country: "France" },
      { city: "Madrid", country: "Spain" },
      { city: "Rome", country: "Italy" }
    ];

    const transform = ({ city, country }) => {
      return `${city} is the capital of ${country}`;
    }
    const expected = [
      "Paris is the capital of France",
      "Madrid is the capital of Spain",
      "Rome is the capital of Italy"
    ];

    //Act
    const result = formatCities(capitals, transform);

    //Assert
    expect(result).toEqual(expected);
  });
});
