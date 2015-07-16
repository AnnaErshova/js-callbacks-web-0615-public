'use strict';

// Make sure you understand what sayHello(name), sayGoodbye(name), and sayHappyBirthday(name) do before proceeding!

var sayHello = function(name){
  return "Hello " + name + "!";
};

var sayGoodbye = function(name){
  return "Goodbye " + name + "!";
};

var sayHappyBirthday = function(name){
  return "Happy Birthday " + name + "!";
};

// Implement saySomething(name, callback) to execute the callback function on the name argument!

var saySomething = function(name, callback){
  // Write code here!
  if (callback === sayHello) {
    return sayHello(name);
  }
  else if (callback === sayGoodbye) {
    return sayGoodbye(name);
  }
  else if (callback === sayHappyBirthday) {
    return sayHappyBirthday(name);
  }
};