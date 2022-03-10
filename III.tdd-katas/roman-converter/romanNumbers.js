const convertToOldRoman = (number)  => {
    if(number<0 || number>3000){
        throw new Error("Number should not be less than 0 and bigger than 3000");
    }
    const romanNum = "I";
    const arrayNum = [];
    if(number<5){
        return romanNum.repeat(number);
    }
}

module.exports = {
    convertToOldRoman
};