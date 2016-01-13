var sumOfParameter = function(a, b) {
    if (a > b) {
        console.log("A greater than B");
    }
    if (b > a) {
        console.log("B greater than A");
    }
    return (console.log("Both Equal"));
    alert("Test after return");
}
console.log(sumOfParameter(9, 9));
