const demo= document.querySelectorAll(".demo")
var counter=0

demo.forEach((demo,index) => {
    demo.style.left= `${index * 100}%` 
});

const goNext=()=>{
    counter++;
    console.log(counter);
    demoCrds()
}

const goPrev=()=>{
    counter--
    demoCrds()
}


const demoCrds=() => {
    demo.forEach(
    (demo) => {
        demo.style.transform= `translateX(-${counter*100}%)`;
    
    }
  )
    
}