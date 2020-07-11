'use strict';

function Accumulator(startingValue) {
    this.currentValue = +startingValue;

    this.read = function() {
        this.inputValue = +prompt('input value:', 0);
        this.currentValue += this.inputValue;
        
    }
};

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.currentValue); // выведет сумму этих значений