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
 * @method async1
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
 * @method async1promisified
 * @desc async1() function is promisified
 * @returns {Promise} fulfilled promise
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
 * @method async2
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
 * @method async2promisified
 * @desc async2() function is promisified
 * @return {Promise} fulfilled promise
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
 * @method async3
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
 * @method async3promisified
 * @desc async3() function is promisified
 * @return {Promise} fulfilled promise
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
 * @method async4
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
 * @method async4promisified
 * @desc async4() function is promisified
 * @return {Promise} fulfilled promise
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
 * @method async5
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
 * @method async5promisified
 * @desc async5() function is promisified
 * @return {Promise} fulfilled promise
 */
function async5promisified()
{
    var deferred = q.defer();

    setTimeout(function(){
        deferred.resolve("async5");
    },5*Math.random());

    return deferred.promise;
}


