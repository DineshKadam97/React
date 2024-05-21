import React from 'react'
import useContextProvider from '../context/ContextProvider'

export default function () {

    const {user} = useContextProvider();
    console.log(user)
    
    if(!user){
        return <div>Please Login</div>
    }
    else 
    {
        return <div>Welcome {user.username} </div>
    }
}
