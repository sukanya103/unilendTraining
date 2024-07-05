
var a = 0
var b = setTimeout(() => {
    //api 2
    console.log("settimeout");
}, 5000);

const t = setInterval(() => {
    a = a+1;
    console.log(a);
    // api 1
    if(a == 4){
        clearInterval(t)
        clearTimeout(b)
    }
   
}, 1000);


// var timer = 0
// var t = setInterval(() => {  //code will excute after every given time
//    timer = timer + 1;
//    console.log(timer);
//    if(timer==10){
//     clearInterval(t)
//    }
// }, 1000);



