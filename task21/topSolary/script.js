'use strict';

let topSalary = function(salaries) {
  let maxSolary = 0;
  let MaxName = null;
 
  for(let [name, solary] of Object.entries(salaries) ) {
    if( maxSolary < solary) {
      maxSolary = solary;
      MaxName = name;
    }
  }

  return MaxName;
};

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( topSalary(salaries) );