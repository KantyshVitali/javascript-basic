'use strict';

let Calculator = function () {
    this.methods = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
    }

    this.addMethod = function (str, func) {
        
        if(typeof str != 'string' || typeof func != 'function') {
            return NaN;
        }
        this.methods[str] = func;
    }

    this.calculate = function(str) {
        str = str.split(' ');
        let leftOperand = +str[0];
        let operator = str[1];
        let rightOperand = +str[2];        
        
        if( this.methods[operator] === undefined ||
            isNaN(leftOperand) || isNaN(rightOperand) ) {                
            return NaN;
        }

            
        let func = this.methods[operator];
        return func(leftOperand, rightOperand);
          
    };
}


let calc = new Calculator;



alert(calc.calculate('2 - 7'));

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

alert(calc.calculate('2 ** 7'));