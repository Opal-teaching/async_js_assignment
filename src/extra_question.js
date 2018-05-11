var s = require("./assignment");
var q = require("q");

qAll(s.async1promisified(), s.async2promisified(), s.async3promisified(), s.async4promisified(), s.async5promisified());

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

// function qAll(arr){
//     var res_arr = [];
//     var counter = 0;
//     arr.forEach(function(promise, i){
//         (function(ind){
//             promise.then(function(res){
//                 res_arr[ind] = res;
//                 counter ++;
//                 if(counter === arr.length) deferred.resolve(res_arr);
//             });
//         })(i);
//     });
// }

function qAll(async1, async2, async3, async4, async5) {
    //var arr = [async1, async2, async3, async4, async5];
    var i = 0;
    async1.then(function(){
        i += 1;
        if(i=5) {
            return arr.promise;
        }
    }).catch(function(error){
       console.log('error for async1');
    });
    async2.then(function(){
        i += 1;
        if(i=5) {
            return arr.promise;
        }
    }).catch(function(error){
        console.log('error for async2');
    });
    async3.then(function(){
        i += 1;
        if(i=5) {
            return arr.promise;
        }
    }).catch(function(error){
        console.log('error for async3');
    });
    async4.then(function(){
        i += 1;
        if(i=5) {
            return arr.promise;
        }
    }).catch(function(error){
        console.log('error for async4');
    });
    async5.then(function(){
        i += 1;
        if(i=5) {
            return arr.promise;
        }
    }).catch(function(error){
        console.log('error for async5');
    });
}