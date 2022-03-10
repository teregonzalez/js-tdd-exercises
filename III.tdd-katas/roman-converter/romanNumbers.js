const convertToOldRoman = (number)  => {
    if(number<0 || number>3000){
        throw new Error("Number should not be less than 0 and bigger than 3000");
    }
    let finalArray = []
    const romanNumI = 'I';
    const romanNumX = 'X';
    if(number>=10){
        const decim = number/10;
        const decimRom = romanNumX.repeat(decim);
        finalArray.push(decimRom);
        const num = number%10;
        if (num<5) {
            const numMenor = romanNumI.repeat(num);
            finalArray.push(numMenor);
            return finalArray.join('');
        } if(num=>5 && num<10) {
            const numb = num%5;
            const numMay = "V" + romanNumI.repeat(numb);
            finalArray.push(numMay);
            return finalArray.join('');
        }
    }
    if(number<5){
        const num = romanNumI.repeat(number);
        return num
    }if(number=>5 && number<10){
        const num = number%5;
        return "V" + romanNumI.repeat(num);
    }
}

module.exports = {
    convertToOldRoman
};