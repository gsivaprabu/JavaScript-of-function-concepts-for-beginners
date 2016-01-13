function plus(a, b) {
    return (
        console.log(a + b),
        console.log(this),
        console.log(arguments)
    )
}

function sampleTest(a, b) {
        console.log(a + b);
        console.log(this);
        console.log(arguments);
}
