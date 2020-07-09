"use strict";

function checkAgeIf(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

function checkAge(age) {    
    return (age >= 18)? true : confirm('Родители разрешили?');
}

function checkAgeOr(age) {    
    return (age >= 18) || confirm('Родители разрешили?');
}

function getMin(a,b){
    return ( a < b) ?a:b;
}

function getPow(a,b){
    return a ** b;
}

let age = +prompt('Введите возраст',18);
alert(checkAgeOr(age));

let number1 = +prompt('Введите число',0);
let number2 = +prompt('Введите число',0);


alert(getPow(number1,number2));






