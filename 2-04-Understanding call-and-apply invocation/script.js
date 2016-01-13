console.log(this);
var speak = function(what) {
    console.log(what);
    console.log(this);
}
speak("Moof");

console.group("call() Sample");
var test = function(what) {
    console.log(this.love);
    console.log(this.normal);
    console.log(saySomething.love);
    console.log(saySomething.normal);
}
var saySomething = {
    normal: "meow",
    love: "Love u"
}

test.call(saySomething, saySomething.whatParams);
console.groupEnd();




console.group("call() with parameter Sample");
var speaking = function(what) {
    console.log(this.love);
    console.log(what);
}

var something = {
    normal: "meow",
    love: "Love u",
    whatParams: "What Params"
}

speaking.call(something, something.whatParams)
console.groupEnd();




console.group("Apply() with Array Sample");
var speakings = function(what) {
    console.log(what);
    console.log(this.love);
}

var somethings = {
    normal: "meow",
    love: "Love u"
}

speakings.apply(somethings,['meow'])
console.groupEnd();
