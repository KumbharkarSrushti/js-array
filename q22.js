var array=[4,5,64,45,32,89,76,12,132]
var i=0
var b=array[i]
while (i<array.length){
    if (array[i]>b){
        b=array[i]
    }
    i=i+1

}
console.log("maximum number",b)
console.log("The length of maximum number",i)