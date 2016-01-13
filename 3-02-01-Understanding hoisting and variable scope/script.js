var testVariable = "Test Variable";

var dog = function() {
    var dogName = "Jimmy";
    withoutVar = "Without var keyword";
    console.log(dogName + " barks !! ");
    var otherDog = function() {
        // var dogName = "Rummy";
        console.log(dogName + " barks !! ");
    }
    otherDog();
}

var otherTest = function() {
    /*var testVariable;*/
    console.log(testVariable);
    // testVariable = "Test Varaibale"
}

otherTest();
