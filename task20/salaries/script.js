'use strict';

let sumSalaries = function(salaries) {
  let sum = 0;

  for(let solary of Object.values(salaries)) {
    sum += solary;
  }

  return sum;
};

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650