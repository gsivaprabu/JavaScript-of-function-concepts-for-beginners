var Dog = function() {
    var name, breed;
    return console.dir(this);
}

firstDog = new Dog;
firstDog.name = "Tom";
firstDog.breed = "Rajapalayam";

secondDog = new Dog;
secondDog.name = "Jerry";
secondDog.breed = "Daburman";

console.log("firstDog.name => " + firstDog.name);
console.log("firstDog.breed => " + firstDog.breed);

console.dir(firstDog);


console.log("secondDog.name => " + secondDog.name);
console.log("secondDog.breed => " + secondDog.breed);

console.dir(secondDog);
