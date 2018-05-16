var s = require("./dumb_async_api"); // Async API
var q = require("q");


/**
 *  Exercise 7:
 *  Implement a function that acts like q.all, do not bother to implement the general case,
 *  only implement it for the specific case of these five promises.
 *
 **/

module.exports = {
    qAll:qAll
};

/**
 * @name qAll
 * @param {Array<Unresolved Promise>} promises
 * @returns {*|PromiseLike<any>}
 */
function qAll(promises){
    var deferred = q.defer();
    var promiseLike = [];
    var counter = 0;

    promises[0].then(function(res){
        promiseLike[0] = res;
        counter ++;
        if (counter == 5){
            deferred.resolve(promiseLike);
        }
    });

    promises[1].then(function(res){
        promiseLike[1] = res;
        counter ++;
        if (counter == 5){
            deferred.resolve(promiseLike);
        }
    });

    promises[2].then(function(res){
        promiseLike[2] = res;
        counter ++;
        if (counter == 5){
            deferred.resolve(promiseLike);
        }
    });

    promises[3].then(function(res){
        promiseLike[3] = res;
        counter ++;
        if (counter == 5){
            deferred.resolve(promiseLike);
        }
    });

    promises[4].then(function(res){
        promiseLike[4] = res;
        counter ++;
        if (counter == 5){
            deferred.resolve(promiseLike);
        }
    });

    return deferred.promise;
}