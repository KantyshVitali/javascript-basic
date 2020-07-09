"use strict";

let isNumberPositive = prompt('Введите число','');

if(isNumberPositive ==0){
    alert(0);
}
else if(isNumberPositive>0){
    alert(1);
}
else if(isNumberPositive<0){
    alert(-1);
}
else{
    lert("Введите число!");
}