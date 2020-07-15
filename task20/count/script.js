'use strict';

let count = (user) => Object.keys(user).length;

let user = {
  name: 'John',
  age: 30
};

alert( count(user) );