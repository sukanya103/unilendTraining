console.log(1);
const p = new Promise((resolve, reject)=> {
    const user = {
        name: 'anil'
    }
   reject('data not found')
})

p.then((data)=> {
  console.log(data);
})


p.catch((error)=>{
console.log(error);
})

p.finally(()=>{
    
})


console.log(2);