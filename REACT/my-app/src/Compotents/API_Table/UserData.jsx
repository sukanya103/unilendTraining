const UserData= ({users})=>{
    return (
        <>
        { 
            users.map( (curUser)=> {
                const {firstName, lastName, email, phone, address, company, role} = curUser ;
                return(
                    <tr>
                        <td>{ `${firstName } ${lastName}`}</td>
                        <td>{email}</td>
                        <td>{phone}</td>
                        <td> {`${address.address }, ${address.city}, ${ address.state}, ${ address.country} `} </td> 
                        {/* <td>{company}</td> */}
                        <td>{role}</td>

                    </tr>
                )
            })
        }
        </>
    )
}

export default UserData 