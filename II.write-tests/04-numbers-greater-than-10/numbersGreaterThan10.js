const largerThanTen = (array) => {
  if(!Array.isArray(array)){
    throw new Error("Error")
  }
  return array.filter(number => {
    return number > 10;
  });
};

module.exports = {
  largerThanTen
};
