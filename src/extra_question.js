var s = require("./dumb_async_api"); // Async API
var q = require("q");


/**
 *  Exercise 7:
 *  Implement a function that acts like q.all, do not bother to implement the general case,
 *  only implement it for the specific case of these five promises.
 *
 *
 **/

/**
 * @name qAll
 * @method qAll
 * @param {Array<Promise>} promiseArray
 * @returns {Array<Promise>} an array of fulfilled promises
 */
function qAll(promiseArray) {
    var deferred = q.defer();
    var numPromises = 5;
    var newArray = new Array(numPromises);
    var i = 0;

    promiseArray[i]
        .then(function(element) {
            newArray[i] = element;
            i++;
            return promiseArray[i];
        })
        .then(function(element){
            newArray[i] = element;
            i++;
            return promiseArray[i];
        })
        .then(function(element){
            newArray[i] = element;
            i++;
            return promiseArray[i];
        })
        .then(function(element){
            newArray[i] = element;
            i++;
            return promiseArray[i];
        })
        .then(function(element){
            newArray[i] = element;
            deferred.resolve(newArray);
        });
    return deferred.promise;
}

(function() {
    someArray = [];
    someArray.push(s.async1promisified());
    someArray.push(s.async2promisified());
    someArray.push(s.async3promisified());
    someArray.push(s.async4promisified());
    someArray.push(s.async5promisified());

    qAll(someArray).then(function(resultArray) {
        var result_str = "";
        resultArray.forEach(function(rElement) {
           result_str = result_str + rElement + ', ';
        });
        console.log(result_str);
    });
})();



