import React, {useState, useEffect} from "react";
import {useLocation} from "wouter"
import './login.css'
import login from "../../services/login";


export default function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState({})
    const [error, setError] = useState({})

    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsLogin(true)
        setError({})
        login(username, password).then(user => {
            setUser(user)
            window.localStorage.setItem(
                'user',JSON.stringify(user)
            )
            setIsLogin(false)
        }).catch(error =>{
            setError(error)
        })
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
            <div>
                {error?<span className="span-error">{error.message}</span>:""}
            </div>
            <button disabled={isLogin}>
                Login
            </button>
        </form>
        </>
    )
}