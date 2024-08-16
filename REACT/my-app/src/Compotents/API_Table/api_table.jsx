import React, { useEffect, useState } from 'react';
import UserData from "./UserData";


const API="https://dummyjson.com/users"

export default function ApiFetch() {
    const [Users, setUsers] = useState ([])
    console.log(Users) 

    const fetchUser= async(url) =>{
        try{

            const res= await fetch(url);
            const data= await res.json();
            if(data.users.length >0) {

                setUsers(data.users)
            }
        }
        catch(e){
            console.error(e)
        }
    }
    useEffect(()=>{
        fetchUser(API);
    }, [] ) //only one time run after loading //madhe variable asel tr pratek veles run hote he  


  return (
    <div>
      <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Company</th>
            <th>Role</th>
            </tr>
            
        </thead>
        <tbody>
            <UserData users ={Users} />
        </tbody>
      </table>
    </div>
  )
}
