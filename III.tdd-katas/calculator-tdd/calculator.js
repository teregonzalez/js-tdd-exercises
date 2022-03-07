const addNum = (numbers) => {
    return numbers.reduce((acumulador, number) => {return acumulador + number})
}

const calculator = (numbers) => {
    if(typeof numbers !== 'string'){
        throw new Error('It is not a string');
    }
    if(numbers.length === 0){
        return 0;
    }
    const onlyNum = numbers.match(/-?\d+(\.\d+)?/g)
    const numArrayFinal = onlyNum.map(number => {
        if(number<0){
            throw new Error('negatives not allowed: '+number);
        }
        if(number>1000){
            return 0;
        }else{
            return Number(number)
        }
    })
    return addNum(numArrayFinal);
}

module.exports = {
    calculator
};
