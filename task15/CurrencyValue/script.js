'use strict';

let extractCurrencyValue = function(str) {
    return +/\d+/.exec(str);
};

alert( extractCurrencyValue('$120') === 120 );