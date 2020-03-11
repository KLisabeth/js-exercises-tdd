// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(numbers) {
    let sum = 0
    let onlyNum = numbers.filter(arr => typeof arr == 'number')
    onlyNum.forEach(function (number) {
        sum += number
    });
    return sum / onlyNum.length
}

module.exports = average;
