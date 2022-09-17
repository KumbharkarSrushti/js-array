var a=[5,1,3,9,12,11,14,13,54,56,67]
var prime_nu=[]
var i=0
console.log(i)
while(i<a.length);{
    var list_e=a[i]
    var count=0
    var j=1
    while (list_e>j){
        if (list_e%j==0);{
            count=count+1
        }
        j=j+1
    }
    if(count==1);{
        prime_nu.push(list_e)
        // console.log(prime_nu)
    }
    i=i+1
}
// console.log(prime_nu)