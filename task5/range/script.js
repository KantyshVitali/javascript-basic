"use strict";

let age = prompt('Введите возраст', 0);
let message;

message = (age>=14 && age<=90) 
    ? ('correct'): ('uncorrect');


message = (!(age>=14 && age<=90)) 
    ? ('correct'): ('uncorrect');            

message = (age<14 || age>90) 
    ? ('correct'): ('uncorrect');

alert(message);    

    