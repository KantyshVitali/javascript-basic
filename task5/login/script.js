"use strict";

let login = prompt('Кто там?','');
let adminPassword = "Я Главный";
let message;
let password;

if(login == "Админ"){
    password = prompt('Пароль?','');
    if(password == adminPassword ){
        message=('Здравствуйте!');
    }
    else if(password == '' || password == null){
        message = ('Отменено');   
    }
    else{
        message = ('Неверный пароль');
    }
}
else if(login == '' || login == null){
    message = ('Отменено');

    }
else{
    message = ('Я вас не знаю');
}
        


alert(message);


    