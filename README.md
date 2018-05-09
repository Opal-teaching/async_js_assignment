# Assignment 2 - Asynchronous code

The idea of this assignment is that you get familiar with
promises. By the end of this assignment you should be
able to promisify a function, control the order of functions
execution.
## Resources
- [Q](https://www.npmjs.com/package/q) Node.js promise library
- [Promise Fundamentals](https://developers.google.com/web/fundamentals/primers/promises)
   Overview of promises by Google
- [AngularJS promises](https://thinkster.io/a-better-way-to-learn-angularjs/promises)
    Tutorial specific to AngularJS.
- [Callbacks vs. Promises](https://www.pluralsight.com/guides/introduction-to-asynchronous-javascript)
    As the names suggests.

## Description
In this assignment you will be using Node.js and the one
dependency for the project which is the package [Q](https://www.npmjs.com/package/q).
The package Q is similar in semantics to the ones offered by AngularJS promises.
### Node.js exports
 In Node.js each file defines a module. Each of these modules
offer an API object through the `module.exports` exports. To define
your own API you would add functions to this object in
the following manner.
```
module.exports = {
    apiFunction1: apiFunction1,
    apiFunction2: apiFunction2

};

function apiFunction1() {

}

function apiFunction2() {

}
```

To access them in another file. We use `var api = require(<path_to_file>)`
```
var some_api = require("./path-to-api-js");
// Call
some_api.apiFunction1();

```

### Q

Q documentation tells you to use fail sometime, you
may use fail/catch, they are both representative of the
failure clause.

## Instructions

1. Read the slides over and follow the references for
    more information on async JavaScript and AngularJS
    promises. Focus on the AngularJS promises and their
    syntax.
2. Complete the exercises in the comments of the file `src/assignment.js`
3. Create a new branch with your name and push to remote when you are done.

