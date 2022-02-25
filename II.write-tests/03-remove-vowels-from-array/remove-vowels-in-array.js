const { removeVowels } = require("../02-remove-vowels/remove-vowels");

function removeVowelsForWords(words) {
  if(!Array.isArray(words)){
    throw new Error("Error");
  }
  const result = words.map(word => {
    return removeVowels(word);
  });
  return result;
}

module.exports = {
  removeVowelsForWords
};

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
