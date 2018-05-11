 /**
  * Exercise 8:
  * Consider the simple function below and explain in terms of the JavaScript
  * execution stack, event loop, and message queue the order of execution. 
  * I expect a discussion of stack and queue contents at each point of the program.
  * 
  */

 function async()
 {
   console.log("a");
   setTimeout(function(){
       console.log("b");
   },2000);
   console.log("c");
 }

 // async();

 /**
  * console.log("a") is first put on the stack, then executed, and popped off the stack
  * then setTimeout is called, and it places its callback function on the stack and returns to the current execution context.
  * then console.log("c") is added to the stack, and executed, and popped off the stack
  * when the stack is empty, the callback function of async is popped from the queue, and place on the stack
  * It then gets executed, and removed from the stack.
  */

/**
 * Exercise 9:
 * Consider the following event emitter and listener function, convert the 
 * 'on' event into Promise syntax. Add the appropriate reject and resolve clauses.
 * If an error occurs, print the error message through error.message. before rejecting the promise
 * If sucessful print, "Ok"
 */

var MyEventEmitter = require('./myEmitter');
const myEmitter = new MyEventEmitter();
// TODO: Create a function that promisifies the event listener.
//
//
myEmitter.on('event', function(error, data){
    // Handle
});
myEmitter.emit('event',null,{"message":"Hello!"});
myEmitter.emit('event',new Error("An error occurred"),null);

