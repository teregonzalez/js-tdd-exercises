const getSecondThird = (array) => {
  if(!Array.isArray(array)){
    throw new Error("Error")
  };
  const newArray = array.slice();
  newArray.sort(function(x, y) {
    return x - y;
  });
  return newArray.slice(1, 3);
};

module.exports = {
  getSecondThird
};
