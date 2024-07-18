const container = document.querySelector(".container")


let arr=[{id:1, Name:'shoes', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price:2000, add_to_cart:false, quantity:"1"},
    {id:2, Name:'Top', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price:500, add_to_cart:false,quantity:"1"},
    {id:3, Name:'Necklace', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price:800, add_to_cart:false, quantity:"1"},
    {id:4, Name:'Mackup', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price:5000, add_to_cart:false, quantity:"1"},
 ];

let mycart=[] 


window.addEventListener("load", ()=>{
    print(arr); //pass function with parameters
    cart(mycart)

})

function print(data) {
    const container = document.querySelector(".container");
    container.innerHTML = " ";
    
    for (let i = 0; i < data.length; i++) {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("class", "data");
      const h3 = document.createElement("h3");
      const h5 = document.createElement("h5");
      const p = document.createElement("p");
      const p3= document.createElement("p")

      const button = document.createElement("button");
      

      button.addEventListener("click", ()=>{
        addcart(arr[i].id)
       
      })
  
      button.innerHTML = "Add to cart";
      h3.innerHTML=arr[i].Name;
      h5.innerHTML=arr[i].price;
      p.innerHTML=arr[i].description;
      p3.innerHTML=arr[i].quantity;
      
      
      
      const decrementBtn = document.createElement("button");
      const incrementBtn = document.createElement("button");
      decrementBtn.innerHTML="-"
      incrementBtn.innerHTML="+"
        let counter = 1;
        function decrement(){
            if(counter> 1){
                counter--;
            }
       arr[i] = { ...arr[i] , quantity: counter }
      
      p3.innerHTML = counter;
        }
        decrementBtn.addEventListener("click",decrement);
    
        incrementBtn.addEventListener("click", () => {
      counter++;
      arr[i] = {...arr[i], quantity: counter}
      p3.innerHTML = counter;
      console.log("counter", counter);
    });

      newDiv.appendChild(h3);
      newDiv.appendChild(h5);
      newDiv.appendChild(p);
      newDiv.appendChild(p3);
      newDiv.appendChild(decrementBtn)
      newDiv.appendChild(incrementBtn)
      newDiv.appendChild(button);
     
  
      container.appendChild(newDiv);
      
    }
}


function cart(mycart) {
    const header2 = document.querySelector(".header2");
    header2.innerHTML=" ";
    console.log("card", mycart);
    for (let i = 0; i < mycart.length; i++) {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("class", "mycart");
      const h3 = document.createElement("h3");
      const h5 = document.createElement("h5");
    //   newDiv.setAttribute("class", "incdec");
      const p = document.createElement("p");

      

      h3.innerHTML=mycart[i].Name;
      h5.innerHTML=mycart[i].quantity ;
      p.innerHTML=mycart[i].price;
      
      newDiv.appendChild(h3);
      newDiv.appendChild(h5);
      newDiv.appendChild(p);
      
      header2.appendChild(newDiv);
}



}

function addcart(id){
    console.log(id)
  
    for(let i=0; i<arr.length; i++){
        if(id==arr[i].id){
            const product = {
                Name: arr[i].Name,
                quantity: arr[i].quantity,
                price: arr[i].price
            }
            mycart.push(product)
        }
    }
   
    cart(mycart)

}