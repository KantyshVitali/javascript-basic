'use strict';

function unique(arr) {
    let uniqueArr = []; 

    for(let str of arr) {
        if (!uniqueArr.includes(str)) {
            uniqueArr.push(str);
        }
    }

    return uniqueArr;
}
  
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
  
alert( unique(strings) );