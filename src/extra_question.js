var dumb_async_api = require("./dumb_async_api"); // Async API
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
 * @param {Array<Unresolved Promise>} promises
 * @returns {*|PromiseLike<any>}
 */
function qAll(promises){
    var deferred = q.defer();
    var data = [];
    var ctr = 0;
    var length = promises.length;
    for (let i = 0; i < length; i++){
        promises[i].then(resolve => {
            data[i] = resolve;
            ctr++;
            if(ctr == length){
                deferred.resolve(data);
            }
        });
    }

    return deferred.promise;
}


var promise1 = dumb_async_api.async1promisified();
var promise2 = dumb_async_api.async2promisified();
var promise3 = dumb_async_api.async3promisified();
var promise4 = dumb_async_api.async4promisified();
var promise5 = dumb_async_api.async5promisified();

qAll([promise1,promise2,promise3,promise4,promise5]).then(data => {
    console.log(data);
}, reject=>{
    console.log(reject);
}).then(() => console.log('done'));