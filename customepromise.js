var q=require('q')
//the method "denodeify" can be called which will cause any function to become a function which returns a promise.
function Add(){
    var c=5+6
}
var p=q.denodeify(Add);
var pr=Add();
console.log(pr);