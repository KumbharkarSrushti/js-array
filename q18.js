var a=[5,7,9,8,10,11,12,95]
let readlineSync = require("readline-sync");
var input=readlineSync.questionInt("What is your age: ")
var i=0
var count=0
while (i<a.length){
    if (input<a[i]);{
        count=count+1
    }
    i=i+1
}
console.log(count)