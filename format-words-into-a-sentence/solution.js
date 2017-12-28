'use strict';
function formatWords(words){
    return words ? words.filter(function (e) {
      return e.length;
    }).join(', ').replace(/,(?=[^,]*$)/, ' and') : '';
  };