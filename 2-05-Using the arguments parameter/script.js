var sum = function() {
    console.log("Length of the array => " + arguments.length);
    var total = 0;
    for (var i = arguments.length - 1; i >= 0; i--) {
        console.log("i value =>" + i);
        console.log("Argument value => " + arguments[i]);
        total += arguments[i];
        console.log("Total inside for loop => [" + i + "] => " + total);
    };
    return total;
}

console.log(sum(2, 3, 4));
