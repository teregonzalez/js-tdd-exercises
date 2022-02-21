const {greetPeople} = require('./greet-people')

describe('Function greetPeople', () => {
  it("print list of names prefixed with Hello", () => {
    //Arrange
    const mentors = ['Irina', 'Ashleigh', 'Etza'];
    const expected = ["Hello Irina", "Hello Ashleigh", "Hello Etza"];

    //Act
    const result = greetPeople(mentors);

    //Assert
    expect(result).toEqual(expected);
  })
})

