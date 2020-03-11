// function secondLargest(numbers) {
//     biggest = Math.max(...numbers);
//     numbers.splice(numbers.indexOf(biggest), 1);
//     return Math.max(...numbers);
// }
// module.exports = secondLargest

//or

function secondLargest(numbers) {
    var x = Math.max(...numbers);
    //storing index of x value in y
    var y = numbers.indexOf(x)
    //removing x value with a index of y using splice()
    numbers.splice(y, 1);
    //now again max of left over elements in array
    //gives second largest number
    var z = Math.max(...numbers);
    return z;
}
module.exports = secondLargest;