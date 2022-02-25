const addOne = (numbers) => {
    if(!Array.isArray(numbers)){
        throw new Error("Error");
    }
    numbers.forEach(number => {
        if(typeof number !== "number"){
            throw new Error("Error");
        }
    })
    return numbers.map(element => element+1)
};

module.exports = {
    addOne
};
