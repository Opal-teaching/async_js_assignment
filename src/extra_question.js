var s = require("./dumb_async_api"); // Async API
var q = require("q");

// PICK WHICH EXERCISE TO RUN HERE
exercise_7();

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

// TODO bug infinte run
function qAll(promises){

    var deferred = q.defer();

    var numPromises = promises.length;
    var numPromisesComplete = 0;

    // Initialize a values array for the results of the promises.
    var values = Array(numPromises);

    /*
promises[0].then(function (value) {
    console.log("done0");
});
*/

    // Iterate through all the unresolved promises to set their .then function
    for (var i=0; i<numPromises; i++){
console.log("ping1");
        // Wrap in a closure to create a new scope for each iteration with a different i
        (function(i) {
console.log(i);
            promises[i]
                .then(function (value) {
                    values.splice(i, 1, value);
                    numPromisesComplete++;
console.log(numPromisesComplete);
                }).catch(function (error) {
                    values.splice(i, 1, error);
                    numPromisesComplete++;
console.log(numPromisesComplete);
                });

        })(i);
    }

    //while(numPromisesComplete<numPromises){/*console.log(numPromisesComplete)*/} // Wait for all the promises to complete.

    // Check every 100 ms to see if the promises are all done.
    var int = setInterval(function(){
console.log("check");
console.log(numPromisesComplete +" "+numPromises);
        if(numPromisesComplete >= numPromises){
console.log("in");

            clearInterval(int);
        }
    }, 500);

    deferred.resolve(values);
    return deferred;
}

// Function to test qall
function exercise_7(){

    var promiseArray = [];
    var result_str = "";

    promiseArray.push(s.async1promisified());
    promiseArray.push(s.async2promisified());
    promiseArray.push(s.async3promisified());
    promiseArray.push(s.async4promisified());
    promiseArray.push(s.async5promisified());

    qAll(promiseArray).then(function (values) {});

    /*qAll(promiseArray)
        .then(function (values) {
            for (let i = 0; i < values.length; i++) {
                if (i === 0) {
                    result_str += values[i];
                }
                else {
                    result_str += (", " + values[i]);
                }
            }
            console.log(result_str);
            console.log("done");
        }).catch(function (error) {
            alert(error);
        });*/
}
