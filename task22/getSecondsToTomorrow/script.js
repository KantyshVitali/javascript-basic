'use strict';

let getSecondsToTomorrow = function() {
  let currentDay = new Date();
  let endDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate() + 1 ) ;

  let different = endDay - currentDay;
  return Math.round(different / 1000);
};

getSecondsToTomorrow();