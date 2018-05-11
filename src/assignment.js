var dumb_async_api = require("./dumb_async_api"); // Async API
var q = require("q"); // Promises package Node.js

/** Execute the following functions corresponding to the exercises and look at the results in the console **/
// ex1();
// ex2();
// ex3();
ex4();

/* Exercise: 1
*    Execute all the functions offered by the 'dumb_async_api' module a
*    few times, the order is irrelevant and we don't care about
*    control over them at the moment.
**/

function ex1(){
    dumb_async_api.async1();
    dumb_async_api.async2();
    dumb_async_api.async3();
    dumb_async_api.async4();
    dumb_async_api.async5();
}

/**
* Exercise 2:
*   'Promisify' the API functions offered by dumb_async_api, and create your own API with promises instead.
*   i.e. Check the 'dumb_async_api.js' and add 5 functions to the module.exports interface, 'async1promisified', to
*   'async5promisified', each of these promises will resolve to the name being printed by each asyncX, i.e.
 *   deferred.resolve('async1') for instance.
* */

function ex2(){
    async1promisified();
    async2promisified();
    async3promisified();
    async4promisified();
    async5promisified();
}

function async1promisified(){
	var deferred1 = q.defer();
	setTimeout(function(){
		deferred1.resolve(console.log('async1'));
	}, 5*Math.random());
	return deferred1.promise;
}

function async2promisified(){
    var deferred2 = q.defer();
    setTimeout(function(){
        deferred2.resolve(console.log('async2'));
    }, 5*Math.random());
    return deferred2.promise;
}

function async3promisified(){
    var deferred3 = q.defer();
    setTimeout(function(){
        deferred3.resolve(console.log('async3'));
    }, 5*Math.random());
    return deferred3.promise;
}

function async4promisified(){
    var deferred4 = q.defer();
    setTimeout(function(){
        deferred4.resolve(console.log('async4'));
    }, 5*Math.random());
    return deferred4.promise;
}

function async5promisified(){
    var deferred5 = q.defer();
    setTimeout(function(){
        deferred5.resolve(console.log('async5'));
    }, 5*Math.random());
    return deferred5.promise;
}

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


function ex3(){

    async1promisified().then(function(result_str){
        result_str = 'async1, ';
        return result_str
    }).then(function(result_str){
        async2promisified();
        result_str += 'async2, ';
        console.log(result_str);
        return result_str
    }).then(function(result_str){
        async3promisified();
        result_str += 'async3, ';
        console.log(result_str);
        return result_str
    }).then(function(result_str){
        async4promisified();
        result_str += 'async4, ';
        console.log(result_str);
        return result_str
    }).then(function(result_str){
        async5promisified();
        result_str += 'async5';
        console.log(result_str);
        return result_str
    }).catch(function(){
        alert(error);
    })
}

/**
 * Exercise 4:
 * Use your current promisify API functions,
 * Execute all the asyncXpromisified functions at the same time using 'q.all',
 * when the results are back, print the results of all the promises, and
 * print 'done', at the end.
 * Expected Output: "async1, async2, async3, async4, async5"
 **/

function ex4(){
    var values = ['async1', 'async2', 'async3', 'async4', 'async5'];
    var promiseArray = [async1promisified(),async2promisified(), async3promisified(), async4promisified(), async5promisified()];
    q.all(promiseArray).then(function(values){
        console.log('here');
        promiseArray.resolve(console.log(values));
        console.log('here2');
        console.log('done');
    });
}

/**
 * Exercise 5:
 * Use your current promisify API functions,
 * Execute async1promisified first, then all the other asyncXpromisified functions in any order
 * printing to the console 'done' after they are all finished.
 **/


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


