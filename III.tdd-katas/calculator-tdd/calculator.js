const addNum = (numbers) => {
    return numbers.reduce((acumulador, number) => {return acumulador + number})
}

const calculator = (numbers) => {
    /*
    if(!Array.isArray(numbers)){
        throw new Error("Error");
    }
    */
    if(typeof numbers !== "string"){
        throw new Error("Error");
    }
    if(numbers.length === 0){
        return 0;
    }
    const numArray = numbers.split(',')
    const numArrayNum = numArray.filter(number => {
        return !isNaN(number)
        })
    const numArrayFinal = numArrayNum.map(number => Number(number))
    return addNum(numArrayFinal);
}

module.exports = {
    calculator
};