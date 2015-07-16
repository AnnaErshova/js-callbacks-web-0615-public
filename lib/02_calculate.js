'use strict';

var addNums = function(num1, num2){
  var sum = num1 + num2;
  return sum;
};

var subtractNums = function(num1, num2){
  var difference = num1 - num2;
  return difference;
};

var calculate = function(num1,num2,callback){
  if (callback == addNums) {
    return addNums(num1,num2);
  }
  else if (callback == subtractNums) {
    return subtractNums(num1,num2);
  }
  else if ((callback != addNums) && (callback != subtractNums)) {
    return num1 * num2;
  }
};


// Write a function called calculate that takes in three arguments – num1, num2, and callback –
// and executes the callback function on the two numbers.