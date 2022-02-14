const findNeedle = (words, searchWord) => { 
    const indexWord = (element) => element === searchWord;
    return words.findIndex(indexWord)
}

module.exports = {
    findNeedle
};
