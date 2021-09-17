# *** MOVED TO GITLAB ***

# Asynchronous JavaScript

## Description

The goal of this assignment is to help you become more familiar and comfortable using promises in JavaScript. 
By the end of this assignment, you should be able to promisify a function and to control the order of function execution in the 
context of promises.

## Background

To help you follow this assignment, you should first familiarize yourself with the following topics. 
You can use the links listed below or any other resources of your choice.

- JavaScript introduction: [W3Schools](https://www.w3schools.com/js/default.asp).

## Resources

The resources below should also help you in following this assignment.

- [Promise Fundamentals](https://developers.google.com/web/fundamentals/primers/promises):
  an overview of promises by Google.
- [AngularJS promises](https://thinkster.io/a-better-way-to-learn-angularjs/promises):
  a tutorial specific to AngularJS.
- [Callbacks vs. Promises](https://www.pluralsight.com/guides/introduction-to-asynchronous-javascript).
- [Q](https://www.npmjs.com/package/q): the Node.js promise library.

## Context

In this assignment, you will be using Node.js and only one dependency, the package [Q](https://www.npmjs.com/package/q).
Q is similar in semantics to AngularJS promises (for which we use a package called 
[$q](https://docs.angularjs.org/api/ng/service/$q)), which makes it easy to write promises in a similar way for both the Opal 
frontend (AngularJS) and backend (Node.js).

### Node.js exports
In Node.js, each file defines a module. Each of these modules can offer an API through the `module.exports` object. To define 
your own API, you can add functions to this object in the following manner:

```
module.exports = {
    apiFunction1: apiFunction1,
    apiFunction2: apiFunction2
};

function apiFunction1() {
    ...
}

function apiFunction2() {
    ...
}
```

To access this API in another file, we use `var api = require(<path_to_file>)`:
```
var some_api = require("./path-to-api-js");
// API call
some_api.apiFunction1();
```

### Q

Note that the Q documentation often includes the use of `fail` in its examples. You can use `fail` or `catch` interchangeably; 
they are both representative of the failure clause. We recommend using `catch`, which is used the most in the Opal code base.

## Instructions

1.  Go over the presentation slides on promises again, and follow the links for more information on asynchronous 
    JavaScript and AngularJS promises. Pay special attention to AngularJS promises and their syntax.
    
2.  Clone this repository.

3.  In the first assignment, we used `npm install <name> --save` to install project dependencies from scratch. This 
    automatically added them to `package.json`. Here, we'll follow a different strategy, using an existing `package.json` 
    to quickly install all required dependencies. Simply run `npm install`, and all dependencies listed in this file will 
    be installed one after the other.
    <br><br>
    This is useful in two ways. First, it facilitates ease of installation. Here, we don't have many dependencies, but in 
    projects with dozens of dependencies, it would be inconvenient to ask users to install them one at a time. Second, it 
    locks down the major versions of the components to install. The caret (`^`) preceding the component versions will 
    allow the latest minor/patch version to be installed (for example, ^1.7.3 might allow 1.7.4 or 1.8.0 to be installed, 
    but not 2.0.0), but the major version will be fixed. This prevents most issues relating to breaking changes in 
    package updates.

4.  Complete the exercises described in the comments of the file `src/async.js`. To run each exercise, use the command
    ```
    npm run start -- 1
    ```
    Just replace `1` with the number of the exercise you want to run. This special syntax (using `--` followed by 
    a space) allows us to pass command line arguments to npm scripts. You can learn more about this syntax 
    [here](https://docs.npmjs.com/cli/run-script).

5.  If you'd like to compare solutions with your teammates or ask for help from the bootcamp runner, 
    you can create a new branch with your name (branching off of `master`), and commit and push your solution to remote.
