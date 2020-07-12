'use strict';

let truncate = function(str, maxlength) {    
    if( str.length <= maxlength ) {
        return str;
    }

    let truncatedStr = str.slice(0, maxlength - 1) + '…';

    return truncatedStr;
};

alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );

alert( truncate("Всем привет!", 20) );