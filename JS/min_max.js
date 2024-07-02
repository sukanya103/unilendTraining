
var numbers = [2,3,8,1,6,7,5]
var min= numbers[0];
var max=numbers[0];
for(var i=0; i<numbers.length; i++){
    if(min>numbers[i]){
        min=numbers[i];
    }
    else if (max<numbers[i])
    {
        max=numbers[i];
    }
}
console.log(min);
console.log(max);