const { removeVowels } = require("../02-remove-vowels/remove-vowels");

function removeVowelsForWords(words) {
  const result = words.map(word => {
    return removeVowels(word);
  });
  return result;
}


/*
const removeVowelsForWords = (words) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  words.map(word => {
    });
  };
*/
module.exports = {
  removeVowelsForWords
};

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
