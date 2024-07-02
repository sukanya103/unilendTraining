
function checkPrime(n) {
    var num=n;
    var isprime=true;
    for(var i=2; i<num; i++){
        if(num%i==0){
        isprime=false;
        }
    }
return isprime;
}



var primes = []
for(var i = 1; i<=50;i++){
   
var p = checkPrime(i);
   if(p == true){
   console.log(i, 'prime');
   } else{
    console.log(i, "Not prime");
   }
}

;
