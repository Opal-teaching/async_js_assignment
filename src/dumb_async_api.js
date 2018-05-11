var q = require("q");

/**
 * @namespace dumb_async_api
 * @type {{async1: async1, async2: async2, async3: async3, async4: async4, async5: async5}}
 */
module.exports = {
	async1:async1,
	async2:async2,
	async3:async3,
	async4:async4,
	async5:async5,
    async1promisified:async1promisified,
    async2promisified:async2promisified,
    async3promisified:async3promisified,
    async4promisified:async4promisified,
    async5promisified:async5promisified
};

/**
 * @name async1
 * @desc Dumb async function, prints "async1" randomly
 */
function async1()
{
	setTimeout(function(){
		console.log("async1");
	},5*Math.random());
}

/**
 * @name async1promisified
 * @desc promisfying async1() function
 */

function async1promisified()
{
	var deferred = q.defer();
	setTimeout(function(){
		deferred.resolve("async1");
	},5*Math.random());

	return deferred.promise;
}

/**
 * @name async2
 * @desc Dumb async function, prints "async2" randomly
 */
function async2()
{
	setTimeout(function(){
		console.log("async2");
	},5*Math.random());
}

/**
 * @name async2promisified
 * @desc promisfying async2() function
 */

function async2promisified()
{
    var deferred = q.defer();
    setTimeout(function(){
        deferred.resolve("async2");
    },5*Math.random());

    return deferred.promise;
}
/**
 * @name async3
 * @desc Dumb async function, prints "async3" randomly
 */
function async3()
{
	setTimeout(function(){
		console.log("async3");
	},5*Math.random());
}

/**
 * @name async3promisified
 * @desc promisfying async3() function
 */

function async3promisified()
{
    var deferred = q.defer();
    setTimeout(function(){
        deferred.resolve("async3");
    },5*Math.random());

    return deferred.promise;
}
/**
 * @name async4
 * @desc Dumb async function, prints "async4" randomly
 */
function async4()
{
	setTimeout(function(){
		console.log("async4");
	},5*Math.random());
}

/**
 * @name async4promisified
 * @desc promisfying async4() function
 */

function async4promisified()
{
    var deferred = q.defer();
    setTimeout(function(){
        deferred.resolve("async4");
    },5*Math.random());

    return deferred.promise;
}
/**
 * @name async5
 * @desc Dumb async function, prints "async5" randomly
 */
function async5()
{
	setTimeout(function(){
		console.log("async5");
	},5*Math.random());
}

/**
 * @name async5promisified
 * @desc promisfying async5() function
 */

function async5promisified()
{
    var deferred = q.defer();
    setTimeout(function(){
        deferred.resolve("async5");
    },5*Math.random());

    return deferred.promise;
}


