const fizzbuzz = (number) => {
    if(number.length === 0){
        throw new Error('Error, debes ingresar un número');
    }
    const numbers = Array.from(Array(number).keys()).map(number => number+1)
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
