const user1 = {
    name: 'anil'

}
const user2 = {
    name: 'amruta',
    print: function(age, city){
        console.log(this.name, age, city);
    }
}

//user2.print.call(user1, 25, 'shirpur')   call method
//user2.print.apply(user1, [25, 'shirpur'])   apply method

//const user1print = user2.print.bind(user1, 25, "shirpur") // bind method to save the funtion

// user1print()
// user1print()
// user1print()
// user1print()
