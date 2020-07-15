'use strict';

let aclean = function(arr) {
  let map = new Map();
  
  for(let string of arr) {
    let sorted = string.toLowerCase().split('').sort().join('');    
    
    map.set(sorted, word);
  }
};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"