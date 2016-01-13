var ray = (function() {
    var DEFAULTS = {
        say: 'hello'
    }
    return {
        speak: function() {
            myArguments = arguments[0] || '';
            var statement = myArguments || DEFAULTS.say;
            console.log(statement);
        }
    };
})();
