'use strict';

let camelize = function(str) {
    str = str.split('-');
    let newStr = [];    

    for(let word of str) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        newStr.push(word);
    }

    newStr[0] = (newStr[0].charAt(0)).toLowerCase() + (newStr[0]).slice(1);
    newStr = newStr.join('');    

    return newStr;
};

alert( camelize("background-color") );
alert( camelize("list-style-image") );
alert( camelize("-webkit-transition") );