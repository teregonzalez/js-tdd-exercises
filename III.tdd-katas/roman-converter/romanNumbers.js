
const lessThanTen = (number) => {
    const numOne = 'I';
    if (number < 5) {
        return numOne.repeat(number);
    } if (number => 5 && number < 10) {
        const num = number % 5;
        return "V" + numOne.repeat(num);
    }
}

const moreThanTen = (number) => {
    const numTen = 'X';
    const decim = number / 10;
    const decimRom = numTen.repeat(decim);
    const num = number % 10;
    const resultLessThanTen = lessThanTen(num);
    return [decimRom, resultLessThanTen]
}


const convertToOldRoman = (number) => {
    if (number < 0 || number > 3000) {
        throw new Error("Number should not be less than 0 and bigger than 3000");
    }
    let finalArray = []
    const numTen = 'X';
    const numFifty = 'L';
    const numHundred = 'C';
    const numFHundred = 'D';
    const numThousand = 'M';

    if (number >= 1000) {
        const mil = number / 1000;
        const thousandRom = numThousand.repeat(mil);
        finalArray.push(thousandRom);
        const num = number % 1000;
        if (num >= 500 && num < 1000) {
            finalArray.push(numFHundred);
            const residFHundred = num % 500;
            if (residFHundred >= 100 && residFHundred < 500) {
                const decim = residFHundred / 100;
                const hundredRom = numHundred.repeat(decim);
                finalArray.push(hundredRom);
                console.log(finalArray);
                const num = residFHundred % 100;
                if (num >= 50 && num < 100) {
                    finalArray.push(numFifty);
                    const residFifty = num % 50;
                    if (residFifty > 10) {
                        const decimFifty = residFifty / 10;
                        const decimRom = numTen.repeat(decimFifty);
                        finalArray.push(decimRom);
                        const numResidFifty = residFifty % 10;
                        const resultLessThanTen = lessThanTen(numResidFifty);
                        finalArray.push(resultLessThanTen);
                        return finalArray.join('');
                    } else {
                        const resultLessThanTen = lessThanTen(residFifty);
                        finalArray.push(resultLessThanTen);
                        return finalArray.join('');
                    }
                }
            } 
            if (residFHundred >= 50 && residFHundred < 100) {
                const decim = residFHundred / 100;
                const hundredRom = numHundred.repeat(decim);
                finalArray.push(hundredRom);
                const num = residFHundred % 100;
                if (num >= 50 && num < 100) {
                    finalArray.push(numFifty);
                    const residFifty = num % 50;
                    if (residFifty > 10) {
                        const decimFifty = residFifty / 10;
                        const decimRom = numTen.repeat(decimFifty);
                        finalArray.push(decimRom);
                        const numResidFifty = residFifty % 10;
                        const resultLessThanTen = lessThanTen(numResidFifty);
                        finalArray.push(resultLessThanTen);
                        return finalArray.join('');
                    } else {
                        const resultLessThanTen = lessThanTen(residFifty);
                        finalArray.push(resultLessThanTen);
                        return finalArray.join('');
                    }
                }
            }
        } else {
            if (num >= 10 && num < 50) {
                const resultMoreThanTen = moreThanTen(num);
                const newFinalArray = finalArray.concat(resultMoreThanTen);
                return newFinalArray.join('');
            }
            const resultLessThanTen = lessThanTen(num);
            finalArray.push(resultLessThanTen);
            return finalArray.join('');
        }
    }
    if (number >= 500 && number < 1000) {
        finalArray.push(numFHundred);
        const residFHundred = number % 500;
        if (residFHundred >= 100 && residFHundred < 500) {
            const decim = residFHundred / 100;
            const hundredRom = numHundred.repeat(decim);
            finalArray.push(hundredRom);
            console.log(finalArray);
            const num = residFHundred % 100;
            if (num >= 50 && num < 100) {
                finalArray.push(numFifty);
                const residFifty = num % 50;
                if (residFifty > 10) {
                    const decimFifty = residFifty / 10;
                    const decimRom = numTen.repeat(decimFifty);
                    finalArray.push(decimRom);
                    const numResidFifty = residFifty % 10;
                    const resultLessThanTen = lessThanTen(numResidFifty);
                    finalArray.push(resultLessThanTen);
                    return finalArray.join('');
                } else {
                    const resultLessThanTen = lessThanTen(residFifty);
                    finalArray.push(resultLessThanTen);
                    return finalArray.join('');
                }
            }
        }
        if (residFHundred >= 50 && residFHundred < 100) {
            const decim = residFHundred / 100;
            const hundredRom = numHundred.repeat(decim);
            finalArray.push(hundredRom);
            const num = residFHundred % 100;
            if (num >= 50 && num < 100) {
                finalArray.push(numFifty);
                const residFifty = num % 50;
                if (residFifty > 10) {
                    const decimFifty = residFifty / 10;
                    const decimRom = numTen.repeat(decimFifty);
                    finalArray.push(decimRom);
                    const numResidFifty = residFifty % 10;
                    const resultLessThanTen = lessThanTen(numResidFifty);
                    finalArray.push(resultLessThanTen);
                    return finalArray.join('');
                } else {
                    const resultLessThanTen = lessThanTen(residFifty);
                    finalArray.push(resultLessThanTen);
                    return finalArray.join('');
                }
            }
        } else {
            if (residFHundred >= 10 && residFHundred < 50) {
                const resultMoreThanTen = moreThanTen(residFHundred);
                const newFinalArray = finalArray.concat(resultMoreThanTen);
                return newFinalArray.join('');
            }
            const resultLessThanTen = lessThanTen(residFHundred);
            finalArray.push(resultLessThanTen);
            return finalArray.join('');
        }
    }

    if (number >= 100 && number < 500) {
        const decim = number / 100;
        const hundredRom = numHundred.repeat(decim);
        finalArray.push(hundredRom);
        const num = number % 100;
        if (num >= 50 && num < 100) {
            finalArray.push(numFifty);
            const residFifty = num % 50;
            if (residFifty > 10) {
                const decimFifty = residFifty / 10;
                const decimRom = numTen.repeat(decimFifty);
                finalArray.push(decimRom);
                const numResidFifty = residFifty % 10;
                const resultLessThanTen = lessThanTen(numResidFifty);
                finalArray.push(resultLessThanTen);
                return finalArray.join('');
            } else {
                const resultLessThanTen = lessThanTen(residFifty);
                finalArray.push(resultLessThanTen);
                return finalArray.join('');
            }
        } else {
            if (num >= 10 && num < 50) {
                const resultMoreThanTen = moreThanTen(num);
                const newFinalArray = finalArray.concat(resultMoreThanTen);
                return newFinalArray.join('');
            }
            const resultLessThanTen = lessThanTen(num);
            finalArray.push(resultLessThanTen);
            return finalArray.join('');
        }
    }

    if (number >= 50 && number < 100) {
        finalArray.push(numFifty);
        const residFifty = number % 50;
        if (residFifty > 10) {
            const resultMoreThanTen = moreThanTen(residFifty);
            const newFinalArray = finalArray.concat(resultMoreThanTen);
            return newFinalArray.join('');
        } else {
            const resultLessThanTen = lessThanTen(residFifty);
            finalArray.push(resultLessThanTen);
            return finalArray.join('');
        }
    }
    if (number >= 10 && number < 50) {
        const resultMoreThanTen = moreThanTen(number);
        const newFinalArray = finalArray.concat(resultMoreThanTen);
        return newFinalArray.join('');
    }
    else {
        return lessThanTen(number);
    }
}

module.exports = {
    convertToOldRoman
};
