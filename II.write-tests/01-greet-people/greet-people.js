const greetPeople = (people) => {
  const greeting = "Hello ";
  const greetingArr = people.map(person => {
    return greeting + person;
  });
  return greetingArr
}

module.exports = {
  greetPeople
};

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
