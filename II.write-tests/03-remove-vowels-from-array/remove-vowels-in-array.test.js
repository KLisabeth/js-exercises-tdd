var removeVowels = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  var input = ["Irina", "Etza", "Daniel"];
  // Arrange
  var output = removeVowels(input);
  // Act
  var result = ["__i_a", "___a", "_a_ie_"];
  // Assert
  expect(output).toEqual(result);
});
// example

// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
