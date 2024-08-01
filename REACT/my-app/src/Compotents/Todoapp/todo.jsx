import { useState } from "react";
import React from "react";

export default function TodoInput(){
    const [Input, setInput]= useState("");
    const [todos, setTodos]= useState([
       { id:1,
        text:"shoping"
     }, 
    ])

    const saveInput=(e)=>{
        setInput(e.target.value);
    }

    const addTask= ()=>{
        const obj={
            id:todos.length+1,
            text: Input
        }

        setTodos(todos.concat([obj]));
        console.log(todos)
    };
    
    

    return(
        <div className="container">
            <div>
                <input onChange={saveInput} type="text" />
                <button onClick={addTask}> Add</button>
                
            </div>
            {
                todos.map((todo, i)=> {
                    return (
                        <p>
                          {i}  {todo.id} {todo.text}
                        </p>
                    )
                }
            )
        }</div>
    )
}



