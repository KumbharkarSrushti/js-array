var array=["mona","sona","mayur","pihu","rani","sayli"]
let readlineSync = require("readline-sync");
var u=readlineSync.question("Enter the letter: ")
var i=0
while(i<array.length){
    var j=0
    while (j<1){
        if (array[i][j]==u){
            console.log(array)
            j=j+1
        }
        // j=j+1
        i=i+1
    }
    i=i+1
}
