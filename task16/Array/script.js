'use strict';

let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

styles[ Math.ceil(styles.length / 2) - 1] = 'Классика';

alert( styles.shift() );

styles.unshift('Регги');
styles.unshift('Рэп');

alert( styles );