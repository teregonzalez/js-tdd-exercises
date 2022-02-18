// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
const average = (numbers) => {
    let sum = [];

    numbers.map(element => {
        if(typeof element === 'number'){
            return sum.push(element)
        }
    });

    if(sum = []){
        throw new Error("Error")
    }
    let sumAll = sum.reduce((a, b) =>{return a + b});
    return sumAll / sum.length;

}

module.exports = {
    average
}
