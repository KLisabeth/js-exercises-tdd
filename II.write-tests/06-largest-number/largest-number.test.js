var largestNumber = require("./largest-number");

test("Get largest number", function() {
    var input = [3, 21, 88, 4, 36];
    var output = largestNumber( Math.max(input));
    
    expect(output).toEqual(output);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
