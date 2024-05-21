import React, { useState } from 'react'
import useContextProvider from '../context/ContextProvider';

export default function Login() {
    const [username,setUsername] = useState(null);
    const [password,setPassword] = useState(null);

    const {setUser} = useContextProvider();

    function handleSubmit(e){
        e.preventDefault();
        setUser({username,password})
    }

  return (
    <div>
        <h1>Login</h1>
        <input type='text' 
        value={username} 
        onChange={(e)=>{setUsername(e.target.value)}}
        placeholder='username'></input>
        {"  "}

        <input type='password' 
        value={password} 
        onChange={(e)=>{setPassword(e.target.value)}}
        placeholder='username'></input>
        {"  "}

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
