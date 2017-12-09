'use strict';

function insertDash(num) {
    var prev = String(num);
    var next = prev[0], i;
    for (i = 1; i < prev.length; i++) {
      if (prev[i-1] % 2 !== 0 && prev[i] % 2 !== 0) {
        next += '-';
      }
      next += prev[i];
    }
    return next;
  } 

OR 

//use JQuery and ES6 arrow notation
let insertDash = num => String(num).replace(/([13579])(?=[13579])/g, '$1-');