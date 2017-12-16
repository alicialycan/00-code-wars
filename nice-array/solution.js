'use strict';

function isNice(arr){
    if (arr.length === 0) return false;
      return arr.every(function(number, i, arr){
      return (arr.includes(number + 1) || arr.includes(number - 1))
    })
};