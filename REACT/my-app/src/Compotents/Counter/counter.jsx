import React, { useState } from "react";

function AppCounter(){

    const [Counter,setCounter] = useState(0);
    
    function increment(){
        // Counter++;
        setCounter(Counter +1)
    }
    
    function decrement(){
        // Counter++;
        setCounter(Counter -1)
    }

    return(
        <div>
            <button onClick={increment}> Increment  </button>
            <p> {Counter}</p>
            <button onClick={decrement}> Decrement</button>

        </div>
    )
}

export default AppCounter;