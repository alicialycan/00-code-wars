'use strict';

function solution(str){
    var array = str.split('');
    return array.reverse().join('');
  }

  // or another option:

  function solution(str){
    return str.split('').reverse().join('');  
  }