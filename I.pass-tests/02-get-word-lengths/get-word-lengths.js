var getWordLengths = function(someWords) {
  //   let word = [];
  // for (let i = 0; i < someWords.length; i++) {
  //   word.push(someWords[i].length);
  // }
  // return word;
  return someWords.map(words => words.length);
};

module.exports = getWordLengths;


