 /**
  * Exercise 8:
  * Consider the simple function below and explain in terms of the JavaScript
  * execution stack, event loop, and message queue the order of execution. 
  * I expect a discussion of stack and queue contents at each point of the program.
  * 
  */

 // PICK WHAT TO RUN HERE
 exercise_9();

 // A frame containing the function async() is pushed onto the stack.
 // Stack: async
 // Queue: empty
 // Console: empty
 function async()
 {
   // "a" is printed to the console
   // Stack: async
   // Queue: empty
   // Console: a
   console.log("a");

   /* This is recognized as an asynchronous call, so a message is created for the inner
      function. It will be added to the message queue a minimum of 2 seconds later.  */
   // Stack: async
   // Queue: empty (will contain the print-"b" function in 2 seconds)
   // Console: a
   setTimeout(function(){
       console.log("b");
   },2000);

   // "c" is printed to the console
   // Stack: async
   // Queue: empty (will contain the print-"b" function in 2 seconds)
   // Console: a c
   console.log("c");
 }

 // async() is done executing, so it is popped from the stack.
 // Stack: empty
 // Queue: empty (will contain the print-"b" function in 2 seconds)
 // Console: a c

 /* Now that the stack is empty, the event loop can process the next message in the queue if there is one.
    However, nothing happens yet because the queue is empty. */
 // Stack: empty
 // Queue: empty (will contain the print "b" function in 2 seconds)
 // Console: a c

 // After two seconds have passed, the print-"b" function message is added to the queue.
 // Stack: empty
 // Queue: print-"b"-function-message
 // Console: a c

 /* The stack is empty but the queue is not, so the event loop processes the next message in the queue.
    A frame containing the print-"b" function is pushed to the stack. */
 // Stack: print-"b"-function
 // Queue: empty
 // Console: a c

 // "b" is printed to the console
 // Stack: "b"-function
 // Queue: empty
 // Console: a c b

 /* The print-"b" function is done executing, so it is popped from the stack.
    The stack and queue are empty so the program terminates. */
 // Stack: empty
 // Queue: empty
 // Console: a c b

/**
 * Exercise 9:
 * Consider the following event emitter and listener function, convert the 
 * 'on' event into Promise syntax. Add the appropriate reject and resolve clauses.
 * If an error occurs, print the error message through error.message. before rejecting the promise
 * If sucessful print, "Ok"
 */

function exercise_9() {

    var MyEventEmitter = require('./myEmitter');
    const myEmitter = new MyEventEmitter();
    // TODO: Create a function that promisifies the event listener.


    myEmitter.on('event', function (error, data) {
        // Handle
        return new Promise(function(resolve, reject) {

            if(error === null){
                console.log("Ok");
                resolve(data);
            }
            else{
                console.log(error.message);
                reject(error);
            }

        });
    });

    var p1 = myEmitter.emit('event', null, {"message": "Hello!"});
    var p2 = myEmitter.emit('event', new Error("An error occurred"), null);
}

