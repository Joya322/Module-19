// 2) Write a function called make_avg() which will take an three integers and return the average of those values.

function make_avg(number1, number2, number3) {
    var sum = number1 + number2 + number3;
    var average = sum / 3;
    return average;
}

var result = make_avg(30, 50, 20);
var finalResult = parseFloat(result.toFixed(2));
console.log(finalResult);