'use strict';

let getLastDayOfMonth = function(year, month) {
  let day = new Date(); 
  day.setFullYear(year, month + 1 , 0);
  return day.getDate();
};


alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28