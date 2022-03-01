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
    const onlyNum = numbers.match(/-?\d+(\.\d+)?/g)
    console.log(onlyNum)
    /*
    const numArrayNum = numArray.filter(number => {
        return !isNaN(number)
        })
        */
    const numArray = onlyNum.map(number => Number(number))
    const numArrayFinal = numArray.map(number => {
        if(number<0){
            throw new Error("negatives not allowed: "+number);
        }
        if(number>1000){
            return number = 0;
        }else{
            return number
        }
    })
    return addNum(numArrayFinal);
}

module.exports = {
    calculator
};