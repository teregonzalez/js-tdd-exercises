const addOne = (numbers) => {
    if(!Array.isArray(numbers)){
        throw new Error("Error");
    }
    return numbers.map(element => element+1)
};

module.exports = {
    addOne
};
