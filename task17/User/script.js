'use script';

let usersToNames = function (arr) {
    let names = [];

    for(let obj of arr) {
        names.push(obj.name);
    }

    return names;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = usersToNames(users);
let names2 = users.map(item => item.name);

alert( names2 ); 
alert( names ); 