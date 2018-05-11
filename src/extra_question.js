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
 * @param {Array<Unresolved Promise>} promises
 * @returns {*|PromiseLike<any>}
 */

function fake_all(arr){
    var deferred = q.defer();
    var resArray = [];
    var counter = 0;

    arr.forEach((promise,i)=> {

        (function (index) {
            promise.then((res)=>{
                resArray[index]= res;
                counter++;
                if(counter === arr.length) deferred.resolve(resArray);
            });
        })(i);

    });



    // s.async1promisified().then(function(res){
    //     resArray[0]= res;
    //     counter++;
    //     if(counter === 5) deferred.resolve(resArray);
    //
    // });
    // s.async2promisified().then(function(res){
    //     resArray[1]=(res);
    //     counter++;
    //     if(counter === 5) deferred.resolve(resArray);
    //
    // });
    // s.async3promisified().then(function(res){
    //     resArray[2]= (res);
    //     counter++;
    //     if(counter === 5) deferred.resolve(resArray);
    //
    // });
    // s.async4promisified().then(function(res){
    //     resArray[3] = (res);
    //     counter++;
    //     if(counter === 5) deferred.resolve(resArray);
    //
    // });
    // s.async5promisified().then(function(res){
    //     resArray[4] = (res);
    //     counter++;
    //     if(counter === 5) deferred.resolve(resArray);
    //
    // });
    return deferred.promise;

}

var result_str2 = "";

function e7(){
    var promiseArray = [];

    promiseArray.push(s.async1promisified());
    promiseArray.push(s.async2promisified());
    promiseArray.push(s.async3promisified());
    promiseArray.push(s.async4promisified());
    promiseArray.push(s.async5promisified());

    return fake_all(promiseArray).then(function (asyncs){
        asyncs.forEach(function(async){
            result_str2 = result_str2+async +", ";
        });
        return result_str2;
    }).catch(function(){
        return 'false';
    })

}

e7().then(function(response){
    console.log(response);
    console.log("done");
}).catch(function(err){
    console.log(err);
})
