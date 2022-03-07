const fizzbuzz = (number) => {
    if(number.length === 0){
        throw new Error('Error, debes ingresar un número');
    }

    let numbersArray = [];
    for(let i = number; i>0; i--){
        numbersArray.push(i)
    }
    
    const numbers = numbersArray.sort((acumulador, number) => {return acumulador-number},0)
    //const numbers = Array.from(Array(number).keys()).map(number => number+1)
    const numbersArr = numbers.map(number=> {
        if(number%3===0 && number%5===0){
        return 'FizzBuzz'
        }if(number%3===0 || number.toString().includes('3') === true){
            return 'Fizz'
        }if(number%5===0 || number.toString().includes('5') === true){
            return 'Buzz'
        }else{
            return number
        }
    })
    return numbersArr.join(', ');
}

module.exports = {
    fizzbuzz
};
