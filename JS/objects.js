var object = {
    name: 'sukanya',
    age: 20,
    getName : function(){
        console.log('My name is '+ this.name+ 'my age is'+ this.age);
    }
}


object.getName()