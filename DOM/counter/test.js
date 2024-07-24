console.log("From JS File");

// const countValue = document.getElementsByClassName("counter-value");
const countValue = document.querySelector(".counter-value");
const decrementBtn = document.querySelector("#decrement-btn");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");

let counter = 0;

function decrement(){
  counter--;
  console.log("counter", counter);
  console.log("countValue", countValue);
  countValue.innerHTML = counter;
}

decrementBtn.addEventListener("click",decrement);

incrementBtn.addEventListener("click", () => {
  counter++;
  // countValue.innerHTML = counter;
  console.log("counter", counter);
});

resetBtn.addEventListener('click',()=>{
  counter=0
  countValue.innerHTML=counter;
})

// Write method to reset the CountValue
