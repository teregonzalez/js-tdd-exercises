const secondLargest = (numbers) => {
    numbers.forEach(number => {
        if(typeof number !== 'number'){
            throw new Error("Error")
        }
    });

    const orderedArray = numbers.sort(function(a, b){return b-a});
    return orderedArray[1]

}

module.exports = {
    secondLargest
}