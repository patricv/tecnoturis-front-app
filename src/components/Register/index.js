import React, {useState, useEffect} from "react";
import {useLocation} from "wouter"
import './register.css'
import register from "../../services/register";


export default function Register(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        register(username, password).then(token => setToken(token))
    }

    return(
        <>
        <form className='form' onSubmit={handleSubmit}>
            <label>
                username
                <input
                placeholder="username"
                onChange={(e)=>{setUsername(e.target.value)}}
                value={username}
                />
            </label>
            <label>
                password
                <input
                type="password"
                placeholder="password"
                onChange={(e)=>{setPassword(e.target.value)}}
                value={password}
                />
            </label>
            <button>
                Register
            </button>
        </form>
        </>
    )
}