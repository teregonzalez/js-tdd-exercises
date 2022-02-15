const removeMiddle = (words) =>{
    if(words.length<3){
        throw new Error("Error")
    }
    const middle = (words.length-1)/2;
    const middleNum = words[middle];
    const arrayNoMiddle = []
    words.forEach(element => 
        {if(element !== middleNum) {
            arrayNoMiddle.push(element)
        }})

    return (middleNum)
}

module.exports = {
    removeMiddle
};