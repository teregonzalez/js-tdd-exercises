const getWordLengths = (someWords) => {
    let numArray = []
    someWords.forEach(
        element =>  
        numArray.push(element.split('').length));
    return numArray;
};

module.exports = {
    getWordLengths
};
