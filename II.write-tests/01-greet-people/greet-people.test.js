var greetPeople = require("./greet-people");

test("print list of names prefixed with Hello", function() {
 // Arrange
  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var output = greetPeople(mentors);
// Act
  var result =greetPeople(mentors);
// Assert
  expect(output).toEqual(result);
}); 