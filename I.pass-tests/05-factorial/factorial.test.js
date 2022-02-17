var {factorial} = require("./factorial");

describe("Function factorial", () => {
  it("Giving 5 should return 120", () => {
    //Arrange
    const in1 = 5;
    const exp1 = 120;

    //Act
    const output = factorial(in1);

    //Assert
    expect(output).toBe(exp1);
  });

  it("Giving 9 should return 362880", () => {
    //Arrange
    const in2 = 9;
    const exp2 = 362880;

    //Act
    const out2 = factorial(in2);

    //Assert
    expect(out2).toEqual(exp2);
  });

  it("Giving 1 should return 1", () => {
    //Arrange
    const in3 = 1;
    const exp3 = 1;

    //Act
    const out3 = factorial(in3);

    //Assert
    expect(out3).toEqual(exp3);
  });

  it("Giving 0 should return 0", () => {
    //Arrange
    const in4 = 0;
    const exp4 = 1;

    //Act
    const out4 = factorial(in4);

    //Assert
    expect(out4).toEqual(exp4);
  });

  it("Giving 3 should return 6", () => {
    //Arrange
    const in5 = 3;
    const exp5 = 6;

    //Act
    const out5 = factorial(in5);

    //Assert
    expect(out5).toEqual(exp5);

  });
});
