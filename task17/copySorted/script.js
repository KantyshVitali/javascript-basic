'use strict';

let copySorted = function(arr) {
    let sortedArr = [];

    for(let element of arr) {
        sortedArr.push(element);
    }

    sortedArr.sort();

    return sortedArr;
};

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)