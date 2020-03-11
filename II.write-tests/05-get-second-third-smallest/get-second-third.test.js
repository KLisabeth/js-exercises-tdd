var secondThird = require("./get-second-third");

test("Get second third", function() {
    var input = [90, 5, 11, 8, 6];
    var output = secondThird(input);
    var expected = [6, 8];
    expect(output).toEqual(expected);
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
