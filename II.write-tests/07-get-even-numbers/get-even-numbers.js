const getEven = (numbers) => {
  if(!Array.isArray(numbers)){
    throw new Error("Error");
  }
  return numbers.filter(number => {
    return number % 2 === 0;
  });
}

module.exports = {
  getEven
};
