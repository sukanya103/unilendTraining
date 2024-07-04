const array='abccdnd'
function duplicate(array, n){
    var dup=[];
for(var i=0; i<array.length; i++){
    let d = false;
    for(var j=i+1; j<array.length; j++){
        if(array[j]==array[i])
        {
            d =true; 
        }
    }
    if(d==n){
        dup.push(array[i])
    }
    }
    console.log(dup);
}
duplicate(array, true)
duplicate(array, false)
