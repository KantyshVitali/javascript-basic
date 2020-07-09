"use strict";

let message;
let login = prompt('Введите логин','');
        
message = 
    (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте':
    (login == '') ? message = 'Нет логина' : 
     '' ;


alert(message);