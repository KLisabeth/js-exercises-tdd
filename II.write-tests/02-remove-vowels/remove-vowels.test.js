var removeVowels = require("./remove-vowels");
test("remove vowels from word", function() {
  var result = removeVowels('samuel'); // Arrange
  var output = removeVowels(result);
  console.log(output);// Act
  expect(output).toEqual(result);// Assert
});
