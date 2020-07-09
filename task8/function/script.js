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

let age = +prompt('Введите возраст',18);

alert(checkAgeOr(age));





