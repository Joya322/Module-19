// 3) Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(items, size) {
    var sum = 0;
    for (var i = 0; i < size; i++){
        sum = sum + items[i];
    }
    var average = sum / size;
    return average;
}

var items = [1, 5, 7, 10, 3, 9, 35, 40];
var size = items.length;
var result = make_avg(items, size);

console.log(result);