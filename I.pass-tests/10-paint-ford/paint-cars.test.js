const { paintShop } = require("./paint-cars");

describe("Function paintShop", () => {
  it("Giving the object cars should return repaintedCars", () => {
    //Arrangment
    const cars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];

    const unpaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];

    const repaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Pink" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];

    //Act
    const output = paintShop(cars);

    //Assert
    expect(output).toEqual(repaintedCars);
    expect(cars).toEqual(unpaintedCars);

  });
});