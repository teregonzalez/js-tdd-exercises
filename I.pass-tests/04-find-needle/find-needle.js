const findNeedle = (words, searchWord) => { 
    if(!Array.isArray(words)){
        throw new Error("Error");
    }
    const indexWord = (element) => element === searchWord;
    return words.findIndex(indexWord)
}

module.exports = {
    findNeedle
};
