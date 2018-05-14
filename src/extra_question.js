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

function qAll(a, b, c, d, e) {
    var arr = [a, b, c, d, e];
    var i = 0;
    console.log(i);
    a.then(function(){
        i += 1;
        console.log(i);
        if(i===5) {
            return arr.promise;
        }
    }).catch(function(error){
       console.log('error for async1');
    });
    b.then(function(){
        i += 1;
        console.log(i);
        if(i===5) {
            return arr.promise;
        }
    }).catch(function(error){
        console.log('error for async2');
    });
    c.then(function(){
        i += 1;
        console.log(i);
        if(i===5) {
            return arr.promise;
        }
    }).catch(function(error){
        console.log('error for async3');
    });
    d.then(function(){
        i += 1;
        console.log(i);
        if(i===5) {
            return arr.promise;
        }
    }).catch(function(error){
        console.log('error for async4');
    });
    e.then(function(){
        i += 1;
        console.log(i);
        if(i===5) {
            return arr.promise;
        }
    }).catch(function(error){
        console.log('error for async5');
    });
}