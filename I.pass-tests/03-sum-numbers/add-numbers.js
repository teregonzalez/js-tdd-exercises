const addNumbers = (numbers) => {
    numbers.forEach(element => {
        if(typeof element !== 'number'){
            throw new Error("Error")
        }
    });
    return numbers.reduce((a, b) =>{return a + b});
}
module.exports = {
    addNumbers
};
