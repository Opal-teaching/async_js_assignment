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
 /*
 1. async() is pushed onto execution stack.
 2. console.log("a") is pushed onto execution stack. Then it's popped off the stack immediately after printing a
 3. setTime(function) is queued into message queue
 4. console.log("c") is pushed onto execution stack. Then it's popped off the stack immediately after printing c
 5. async() is popped off the stack
 6. The event handler sees that the execution stack is empty, so it pushes console.log("b"). Then it gets popped off
    the stack after printing b.
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

