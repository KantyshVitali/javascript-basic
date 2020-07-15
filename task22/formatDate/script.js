'use strict';

let formatDate = function(date) {
  let currentTime = new Date();
  let different = currentTime - date;

  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  
  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  if(different < 1e3 ) {
    return 'прямо сейчас';
  }
  else if(different < 6e4 ) {    
    return Math.round(different / 1e3) + ' сек. назад';
  }
  else if(different < 36e5) {
    return Math.round(different / 6e4) + ' мин. назад';
  }
  else {
     return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
};

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );