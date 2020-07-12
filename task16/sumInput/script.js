'use strict';

let sumInput = function() {
   
    let resultValues = [];
   

    while( true ) {
        let inputValue = prompt('input value', 0); 

        if( inputValue === "" || inputValue === null || !isFinite(inputValue) ) {
            break;
        }

        resultValues.push(+inputValue);
    }

    let resultSum = 0;

    for( let resultValue of resultValues ) {
        resultSum += resultValue;
    } 

    return resultSum;
};


alert( sumInput() );