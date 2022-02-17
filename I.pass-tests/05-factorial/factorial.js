// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

const factorial = (in1) => {
    if(in1 === 0){
        return 1
    }
    for (let i = in1 - 1; i >= 1; i--) {
        in1 *= i;
      }
      return in1;
}

module.exports = {
    factorial
};
