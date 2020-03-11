function addNumbers(numbers) {
    var sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
  }
  return sum;
}
module.exports = addNumbers;


