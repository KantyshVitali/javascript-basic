'use strict';

let calculator = {
    
    read(){
        this.a = +prompt('input a :', 0);
        this.b = +prompt('input b :', 0);
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;        
    }

};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );