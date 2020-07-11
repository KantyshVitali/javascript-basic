'use strict';

function random(min, max) {
    return min + Math.random() * (max - min);
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  alert( randomInteger(1, 3) );

alert( randomInteger(1, 5) ); 
alert( randomInteger(1, 5) ); 
alert( randomInteger(1, 5) ); 