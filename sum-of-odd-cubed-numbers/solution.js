'use strict';
function cubeOdd(arr) {
    arr = arr.filter((num) => {return num % 2 != 0});
    arr = arr.reduce((a, b) => a + Math.pow(b, 3), 0);
    return isNaN(arr) ? undefined : arr;
  }