/**
 * Exercise 8:
 * Consider the simple function below and explain in terms of the JavaScript
 * execution stack, event loop, and message queue the order of execution.
 * I expect a discussion of stack and queue contents at each point of the program.
 *
 */

function async() {
    console.log("a"); // A
    setTimeout(function () {
        console.log("b"); // B
    }, 2000);
    console.log("c"); // C
}

/*
Process of the code above by computer:
1. A is pushed into stack and print 'a'
2. setTimeout is pushed into stack. It let me wait for 2 seconds... ok, add function B into queue and do it after 2 seconds
3. C is pushed into stack and print 'c'
4. stack is empty... waiting... 2 seconds is quite a long time for me
5. here we go, execute function B and print 'b'
 */

/**
 * Exercise 9:
 * Consider the following event emitter and listener function, convert the
 * 'on' event into Promise syntax. Add the appropriate reject and resolve clauses.
 * If an error occurs, print the error message through error.message. before rejecting the promise
 * If sucessful print, "Ok"
 */

// const MyEventEmitter = require('events');
// const myEmitter = new MyEventEmitter();
//
// var emit = promisify(myEmitter.emit);
// function sad(param)
// {
//     return new Promise((resolve,reject)=>{
//         myEmitter.emit...
//         myEmitter.on('',()=>{
//
//         });
//     });
//
//
// }
// myEmitter.on('event', function (error, data) {
//     if (error) {
//         console.log(error.message);
//     }
//     if (data) {
//         console.log(data);
//     }
//
// });

// myEmitter.emit('event', null, {"message": "Hello!"})
//     .then((resolve)=>{console.log(resolve);})
//     .catch(err => console.log(err));
// myEmitter.emit('event', new Error("An error occurred"), null).then()
//     .then((resolve)=>{console.log(resolve);})
//     .catch(err => console.log(err));