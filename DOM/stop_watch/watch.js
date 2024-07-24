// const start=document.querySelector("#startbtn")
// const stopbtn=document.querySelector("#stopbtn")
// const restart=document.querySelector("#restartbtn")

// const sec= document.querySelector("#sec")
// const min= document.querySelector("#min")

// let counter=0;

// var t;

// start.addEventListener("click", startCounter)
// stopbtn.addEventListener("click", stopCounter)
// restart.addEventListener("click", restartCounter)

// function startCounter(){

//     clearInterval(t)
//      t = setInterval(() => {  //code will excute after every given time
//     counter++;
//     sec.innerHTML=counter;
//     console.log(counter);

    
//     }, 300)

    
// }

// function stopCounter(){
//     console.log("stop");
//     clearInterval(t)
// }

// function restartCounter(){
//     counter=0;
//     display.innerHTML=counter;
// }


const start = document.querySelector("#startbtn");
const stopbtn = document.querySelector("#stopbtn");
const restart = document.querySelector("#restartbtn");

const display = document.querySelector("#display");

let counter = 0;
let t;

start.addEventListener("click", startCounter);
stopbtn.addEventListener("click", stopCounter);
restart.addEventListener("click", restartCounter);

function startCounter() {
    clearInterval(t);
    t = setInterval(() => {
        counter++;
        const time = formatTime(counter);
        display.innerHTML = time;
        console.log(time);
    }, 1000);  // update every second
}

function stopCounter() {
    console.log("stop");
    clearInterval(t);
}

function restartCounter() {
    counter = 0;
    const time = formatTime(counter);
    display.innerHTML = time;
}

function formatTime(seconds) {
    let hrs = (seconds / 3600) | 0;  // integer division
    let mins = ((seconds % 3600) / 60) | 0;  // integer division
    let secs = seconds % 60;
console.log(secs);
    hrs = hrs < 10 ? '0' + hrs : hrs;
    mins = mins < 10 ? '0' + mins : mins;
    secs = secs < 10 ? '0' + secs : secs;

    return `${hrs}:${mins}:${secs}`;
}
