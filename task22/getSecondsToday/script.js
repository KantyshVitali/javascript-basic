'use strict';

let getSecondsToday = function() {
  let currentDay = new Date();
  let endDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate());

  let different = currentDay - endDay;
  return Math.round(different / 1000);
};

getSecondsToday();