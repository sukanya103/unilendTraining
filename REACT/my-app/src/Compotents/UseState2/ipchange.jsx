import React, { useState } from "react";

function IpValue(){
      
    const [Value, setValue] = useState()
    function changeValue(e){
        let a= e.target.value;
        setValue(a)
    }

    return(
        <div>
            <input onChange={changeValue} type="text" />
            <h1>{Value}</h1>
        </div>
    )
}

export default IpValue;