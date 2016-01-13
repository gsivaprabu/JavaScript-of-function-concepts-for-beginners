var Speak = function(sayWhat) {
    console.log(sayWhat);
}

var Dog = function() {
    var name, breed;
}

var Cat = function() {
    var name, breed;
}

Dog.prototype.Speak = Speak;

firstDog = new Dog;
firstDog.name = "Rover";
firstDog.breed = "Doberman";
firstDog.Speak('Woow');

Cat.prototype.Speak = Speak;

firstCat = new Cat;
firstCat.name = "Missi";
firstCat.breed = "Indian";
firstCat.Speak('Meow Meow');


var myThing = {}
console.dir(myThing);

console.dir(Speak);
