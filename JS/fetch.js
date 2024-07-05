

fetch('https://jsonplaceholder.typicode.com/todos')
.then((data)=> {
  return data.json()
}).then((data)=> {
    console.log(data);
}).catch((error)=> {
    console.log(error);
})
