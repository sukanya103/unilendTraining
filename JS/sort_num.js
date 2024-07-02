var numbers=[2, 5, 1, 3, 8];

function sortArray( array) {
    
    var ass_no=[];
    for (var i=0; i<array.length; i++){ 
        for (var j=1; j<array.length-1 ; j++){
            if( array[j-1] > array[j]) {
                var temp= array[j-1];
                array [j-1] =  array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
console.log( sortArray(numbers)); 
