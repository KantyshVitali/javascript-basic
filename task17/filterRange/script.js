'use strict';

let filterRange = function(arr, a, b) {
    let newArray = [];

    for(let num of arr) {
        if( +num >= a && +num <= b) {
            newArray.push(+num);
        }
    }

    return newArray;
};

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)