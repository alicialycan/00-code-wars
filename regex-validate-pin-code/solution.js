'use strict';

let validatePIN = function(pin) {
    
      let string = (/^(\d{4}|\d{6})$/g);
      return string.test(pin);
    };