import { useState, useEffect } from "react";
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

    useEffect(()=>{
      localStorage.setItem("todolist", JSON.stringify(todos))
    }, [todos])
    
    function editTask(id) {
        console.log(id);
        const editarr = [];
      
        for (let i = 0; i < todos.length; i++) {
          if (id == todos[i].id) {
            const obj = {
              id: todos[i].id,
              text: Input
            };
            editarr.push(obj);
          } else {
            editarr.push(todos[i]);
          }
        }
        setTodos(editarr);
      }


    return(
        <div className="container">
            <div>
                <input onChange={saveInput} type="text" />
                <button onClick={addTask}> Add</button>
                
                {/* <button onClick={}> Delete </button> */}
                
            </div>
            {
                todos.map((todo, i)=> {
                    return (
                        <div>
                            <p>
                          {i}  {todo.id} {todo.text}
                    
                        </p>
                        <button onClick={()=>{
                                editTask(todo.id)
                            }}> Edit </button>

                        </div>
                    )})
            }

           
        </div>
    )
}



