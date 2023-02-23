"use strict";
var Use;
(function (Use) {
    function log(msg) {
        console.log(msg);
    }
    Use.log = log;
    function error(msg) {
        console.error(msg);
    }
    Use.error = error;
})(Use || (Use = {}));
Use.log('call me');
Use.error('ok');
var Hello;
(function (Hello) {
    function log(msg) {
        console.log(msg);
    }
    Hello.log = log;
    function info(msg) {
        console.info(msg);
    }
    Hello.info = info;
})(Hello || (Hello = {}));
Hello.log('World');
Hello.info('Windy');
