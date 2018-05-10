var dumb_async_api = require("./dumb_async_api"); // Async API
var q = require("q"); // Promises package Node.js

/* Exercise: 1
*    Execute all the functions offered by the 'dumb_async_api' module a
*    few times, the order is irrelevant and we don't care about
*    control over them at the moment.
**/
/*
dumb_async_api.async1();
dumb_async_api.async2();
dumb_async_api.async3();
dumb_async_api.async4();
dumb_async_api.async5();
*/

/**
* Exercise 2:
*   'Promisify' the API functions offered by dumb_async_api, and create your own API with promises instead.
*   i.e. Check the 'dumb_async_api.js' and add 5 functions to the module.exports interface, 'async1promisified', to
*   'async5promisified', each of these promises will resolve to the name being printed by each asyncX, i.e.
 *   deferred.resolve('async1') for instance.
* */

/** Done */

/**
 * Exercise 3:
 * Use your current promisify API functions,
 * Compute functions in order, concatenate each time to 'result_str'
 * which is defined below.
 * Print the resulting string in the last promise callback.
 * Expected Output: "async1, async2, async3, async4, async5",
 * Note: If you want to catch the error with only one catch clause,
 * return the next promise as you progress through the promises.
 **/
var result_str = "";

/*
dumb_async_api.async1promisified()
	.then(function(value){
		result_str += value + ", ";
		return dumb_async_api.async2promisified();

	}).then(function (value) {
		result_str += value + ", ";
    	return dumb_async_api.async3promisified();

	}).then(function (value) {
		result_str += value + ", ";
    	return dumb_async_api.async4promisified();

	}).then(function (value) {
    	result_str += value + ", ";
    	return dumb_async_api.async5promisified();

	}).then(function (value) {
    	result_str += value;
    	console.log(result_str);

	}).catch(function (error) {
		alert(error);
	});
*/

/**
 * Exercise 4:
 * Use your current promisify API functions,
 * Execute all the asyncXpromisified functions at the same time using 'q.all',
 * when the results are back, print the results of all the promises, and
 * print 'done', at the end.
 * Expected Output: "async1, async2, async3, async4, async5"
 **/

/*
var promiseArray = [];
var result_str_4 = "";

promiseArray.push(dumb_async_api.async1promisified());
promiseArray.push(dumb_async_api.async2promisified());
promiseArray.push(dumb_async_api.async3promisified());
promiseArray.push(dumb_async_api.async4promisified());
promiseArray.push(dumb_async_api.async5promisified());

q.all(promiseArray)
	.then(function(values) {
		for(let i=0; i<values.length; i++){
			if(i===0){
				result_str_4 += values[i];
			}
			else{
                result_str_4 += (", "+values[i]);
			}
		}
        console.log(result_str_4);
		console.log("done");
    }).catch(function (error) {
    	alert(error);
	});
*/

/**
 * Exercise 5:
 * Use your current promisify API functions,
 * Execute async1promisified first, then all the other asyncXpromisified functions in any order
 * printing to the console 'done' after they are all finished.
 **/

var promiseArray = [];
var result_str = "";

dumb_async_api.async1promisified()
	.then(function(value){
        result_str += value;

        promiseArray.push(dumb_async_api.async2promisified());
        promiseArray.push(dumb_async_api.async3promisified());
        promiseArray.push(dumb_async_api.async4promisified());
        promiseArray.push(dumb_async_api.async5promisified());

		return q.all(promiseArray);

	}).then(function (values) {

		for(let i=0; i<values.length; i++){
			result_str += (", "+values[i]);
		}

		console.log("done");
		console.log(result_str);


	}).catch(function (error) {
		alert(error);
	});

/**
 * Exercise 6:
 *  Call the function below, twice, for the error and success cases, and apply the then/catch clause to print
 *  the result, in the case of error, print error to the console.
 */
/**
 * @name async6promisified
 * @desc Async function, rejects error randomly, given a parameter
 */
function async6promisified(param)
{
	var deferred = q.defer();
	if(param > 10 || param < 0)
	{
		deferred.reject(new Error("Error: param value is not a strictly between 0 and 10"));
	}
	setTimeout(function(){
		deferred.resolve("async6");
	},5*Math.random());
	return deferred.promise;
}


