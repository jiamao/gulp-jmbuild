__inline("/test/c.js");

define("b", [ "./a" ], function(require, exports, module) {
    var a = require("./a");
    exports.init = function() {
        a.run("b");
    };
});