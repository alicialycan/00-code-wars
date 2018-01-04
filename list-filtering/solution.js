'use strict';
function filter_list(l) {
    return l.filter(i => typeof i === 'number');
   }

// or another optional solution:

function filter_list(l) {
    return l.filter( i => parseInt(i) === i);
   }