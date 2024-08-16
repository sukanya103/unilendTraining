i
let countries= [];


window.addEventListener("load", ()=>{

  fetchCall()
 
})

function fetchCall(){
  fetch('https://restcountries.com/v3.1/all')
  .then((data)=> {
  return data.json()
  }).then((data)=> {
    console.log(data);
    print(data);
    countries.push(data)
  })
}

function print(countries){
  console.log(countries);
  const container=document.querySelector(".container")
  for (let i = 0; i < countries.length; i++) {

    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "Alldata");
    const Name = document.createElement("h3");
    // const lang = document.createElement("h5");
    const population = document.createElement("p");
    const time= document.createElement("p")
    const flag= document.createElement("img")
  
    Name.innerHTML=countries[i].capital;
    // lang.innerHTML=countries[i].languages;
    population.innerHTML=countries[i].population;
    time.innerHTML=countries[i].timezones;
    // flag.innerHTML= countries[i].flags[0];


    // Create a div element to hold the flag image and country name
    const countryDiv = document.createElement('div');
    

    
    const flagImgHTML = `<img src="${countries.flags[0]}"`
    countryDiv.innerHTML = flagImgHTML;

    // Append the country div to the container
    // container.appendChild(countryDiv);
  
        newDiv.appendChild(Name);
        // newDiv.appendChild(lang);
        newDiv.appendChild(population);
        newDiv.appendChild(time);
        newDiv.appendChild(flag);
        newDiv.appendChild(countryDiv)
        
        container.appendChild(newDiv);
        
  }

}
