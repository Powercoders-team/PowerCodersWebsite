const program = 'BA 0B 01 B4 09 CD 21 B4 4C CD 21 48 65 6C 6C 6F 20 57 6F 72 6C 64 21 0D 0A 24';
var source;
window.onload = function(){
    "use strict";
    let arr = program.split(' ');
    for(var item in arr){
        source += String.fromCharCode(parseInt(arr[item], 16));
    }
}

