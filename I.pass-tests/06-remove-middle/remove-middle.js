const removeMiddle = (words) =>{
    if(words.length<3){
        throw new Error("Error")
    }
    const middle = (words.length-1)/2;
    const middleNum = words[middle];
    words.splice(middle, 1);

    return [middleNum];
    //return middleNum;
}
module.exports = {
    removeMiddle
};