'use strict';

let ucFirst = function(string) {
    if (!string) {
        return string;
    }

    return string[0].toUpperCase() + string.slice(1);
};


alert( ucFirst("вася") == "Вася" );
alert( ucFirst("вася"));