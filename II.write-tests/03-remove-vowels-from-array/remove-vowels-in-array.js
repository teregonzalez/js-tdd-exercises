//const { removeVowels } = require("../02-remove-vowels/remove-vowels");

const removeVow = (word) => {
  const characters = word.split("");

  const result = [];
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

  characters.forEach(character => {
    if (vowels.includes(character)) {
      result.push("");
    } else {
      result.push(character);
    }
  });

  return result.join("");
}

function removeVowelsForWords(words) {
  const result = words.map(word => {
    return removeVow(word);
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
