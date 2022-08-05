// 4) Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways: ● Has return + Has parameter ● No return + Has parameter

// No return + Has parameter 
/* function odd_even(number) {
        if (number % 2 == 0) {
          console.log("Even");
        }
        else {
            console.log("Odd");
        }
}

odd_even(6); */

// Has return + Has parameter
function odd_even(number) {
    var output;
    if (number % 2 == 0) {
        output = "Even";
    } else {
        output = "Odd";
    }
    return output;
}
var number = 9;
var output = odd_even(number);
console.log(output);