import React from 'react'
import { useState } from 'react';
import './form.css'
export default function Form() {

    const [formData, setFormdata]= useState([]);

    const handle =(e)=>{
        e.preventDefault ();
        const inputData=e.target;

        const form={};
        for(let i=0; i<inputData.length-1; i++){
            const input= inputData[i]; 
            form[input.name]= input.value;
        }
        setFormdata([...formData,form])
    }

    console.log(formData)

  return (
    <div >
        <h1> Menu Card</h1>
        <div className='container'>
        <form onSubmit={handle} action=""> 
      <input id='form' type="text" name='itemname' placeholder='enter Menu name' />
      <input id='form' type="text" name='itemprice' placeholder='enter price' />
      <input id='form' type="text" name='itemquantity'  placeholder='enter quantity'/>
      <input id='form' type="text" name='itemtaste' placeholder='enter spice/sweet quantity'/>
      <input id='form' type="text" name='itemreview' placeholder='give review '/>
      <input id='formsub' type="submit"/>
        </form>
    </div>

    <div>
        {formData.map((data)=>{
            return (
            <div className='data'>
                <div className='upper'>
                    <p>{data.itemname }  </p>
                    <p>....................................................................</p>
                    <p> Price: {data.itemprice } </p>
                </div>
                
              <div className='info' > <p>{ data.itemtaste}</p>  </div> 
               <p> Quantity: {data.itemquantity } </p> 
                  
               <p> Review: {data.itemreview} </p> 
                </div>
            )
        }) }
    </div>
</div>
    
  )
}
