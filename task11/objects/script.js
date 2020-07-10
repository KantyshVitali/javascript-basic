"use strict";

function isObjectEmpty(obj) {
    for(let i in obj) {
        return false;
    }
    return true;   
}

function getSum(obj) {
    let sum = 0;
    for(let i in obj) {
        sum += obj[i];
    }
    return sum;
}

function multiplyNumeric(obj) {
    for(let key in obj) {
        if(typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }

}

let user = {};

let solaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

user['name'] = 'John';
user['surname'] = 'Smith';
user['name'] = 'Pete';

delete user['name'];


multiplyNumeric(solaries);
alert(getSum(solaries));