const fizzbuzz = (number) => {
    const numbersArray = Array.from(Array(number).keys())
    const numbers = numbersArray.map(number => number+1)
    console.log(numbers)
    const numbersArr = numbers.map(number=> {
        if(number%3===0){
            return "Fizz"
        }if(number%5===0){
            return "Buzz"
        }if(number%3===0 && number%5===0){
            return "FizzBuzz"
        }else{
            return number
        }
    })
    return numbersArr.join(", ");


}

module.exports = {
    fizzbuzz
};