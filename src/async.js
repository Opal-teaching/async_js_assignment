let async_api = require('./async_api'); // Async API
const process = require('process');	// Used to pass command-line arguments to this file
let q = require('q'); // Promise library for Node.js

// List of exercises that can be run
let exercises = [
	exercise1,
	exercise2,
	exercise3,
	exercise4,
	exercise5,
	exercise6,
	exercise7,
	exercise8,
];

// Strings
let runningExercise = "Running exercise "; // String printed when running an exercise.
let notImplemented = "Exercise not implemented."; // String printed for unimplemented exercises.

////////

// Validate the number of command-line arguments passed when running this file
if (process.argv.length < 3)
{
	console.log("Please provide one argument, the number of the exercise to run (there are "+exercises.length
		+" exercises).");
	process.exit(0);
}

// Extract the number of the exercise to run from the arguments
let n = parseInt(process.argv[2]);	// The 0th and 1st arguments are paths to node.exe and to this file

// Validate the exercise number
if (!Number.isInteger(n))
{
	console.error("The provided argument isn't an integer.");
	process.exit(1);
}

let i = n-1; // The index of the exercise to run in the exercises array

if (i < 0 || i > exercises.length - 1)
{
	console.error("Exercise "+n+" doesn't exist.");
	process.exit(1);
}

console.log(runningExercise + n);

// Run the right exercise
exercises[i]();

////////

/* Exercise 1:
 *     Execute all the functions offered by the 'async_api' module.
 *     The order is irrelevant, and we don't care about control over them at the moment.
 */
function exercise1()
{
	// TODO: implement
	console.log(notImplemented);
}

/*
 * Exercise 2:
 *     'Promisify' the API functions offered by async_api to create your own API with promises instead.
 *     i.e. open 'async_api.js' and add 5 functions to the module.exports interface: 'async1promisified' to
 *     'async5promisified'. Each of these X promises should behave similarly to its non-promisified version
 *     (printing asyncX), and should resolve to asyncX, i.e. deferred.resolve('async1'), for instance.
 *     Each promisified function should stand alone (e.g. async1promisified shouldn't call async1).
 */
function exercise2()
{
	// TODO: implement the required content in 'async_api.js'
	console.log("No execution required.");
}

/*
 * Exercise 3:
 *     Call all of your promisified API functions from Exercise 2, in a way that enforces their order.
 *     Concatenate the result from each to 'result_str', which is defined below.
 *     At the end, print "done", then print the resulting string in the last promise callback.
 *     Expected Output: "async1, async2, async3, async4, async5".
 *     Note: To catch the error with only one catch clause at the end, return the next promise as you
 *     progress through the promises.
 */
function exercise3()
{
	let result_str = "";

	// TODO: implement
	console.log(notImplemented);
}

/*
 * Exercise 4:
 *     Execute all the asyncXpromisified functions at the same time using 'q.all'.
 *     When the results are back, print "done", then print the results of all the promises.
 *     Expected Output: "async1, async2, async3, async4, async5".
 */
function exercise4()
{
	// TODO: implement
	console.log(notImplemented);
}

/*
 * Exercise 5:
 *     Execute async1promisified first, then all other asyncXpromisified functions in any order.
 *     Print "done" to the console after they're all finished.
 */
function exercise5()
{
	// TODO: implement
	console.log(notImplemented);
}

/*
 * Exercise 6:
 *     Call the promisified function below twice, using appropriate parameters to produce one success case and one
 *     error case. Use .then and .catch clauses to capture the results, and print each result to the console with the
 *     parameter that produced it, indicating whether it's a success or an error.
 */
function exercise6()
{
	// TODO: implement
	console.log(notImplemented);
}

/**
 * @name async6promisified
 * @desc Async function, rejects error randomly, given a parameter
 */
function async6promisified(param)
{
	let deferred = q.defer();
	if(param > 10 || param < 0)
	{
		deferred.reject(new Error("Error: parameter value is not strictly between 0 and 10."));
	}
	setTimeout(function(){
		deferred.resolve("async6");
	},5*Math.random());

	return deferred.promise;
}

/*
 * Exercise 7 (challenge):
 * Implement the function qAll to act like q.all.
 * Make sure your function runs correctly when called from exercise7.
 */
/**
 * @name qAll
 * @param {Array<Unresolved Promise>} promises
 * @returns {*|PromiseLike<any>}
 */
function qAll(promises)
{
	// TODO: implement
	console.log(notImplemented);
}

// Function to test qAll
function exercise7()
{
	var promiseArray = [];
	var result_str = "";

	promiseArray.push(async_api.async1promisified());
	promiseArray.push(async_api.async2promisified());
	promiseArray.push(async_api.async3promisified());
	promiseArray.push(async_api.async4promisified());
	promiseArray.push(async_api.async5promisified());

	qAll(promiseArray)
	.then(function (values) {
		for (let i = 0; i < values.length; i++) {
			if (i === 0) {
				result_str += values[i];
			}
			else {
				result_str += (", " + values[i]);
			}
		}
		console.log("done");
		console.log(result_str);

	}).catch(function (error) {
		console.error(error);
	});
}

/*
 * Exercise 8:
 *     Consider the simple function below and explain in terms of the JavaScript
 *     execution stack, event loop, and message queue the order of execution.
 *     Using comments, describe the stack and queue contents at each point of the program.
 */

function exercise8()
{
	console.log("a");
	setTimeout(function() {
		console.log("b");
	},2000);
	console.log("c");
}
