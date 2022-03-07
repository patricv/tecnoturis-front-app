import React, {useState} from "react";
import {useLocation} from "wouter"
import login from "../../services/login";
import './login.css'



export default function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const [,navigate] = useLocation()

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
            navigate('/hotels')
        }).catch(error =>{
            setError(error)
            setIsLogin(false)
        })
    }

    return(
        <div>
        <div className='title'>
            <h>Sing In</h>
        </div>
        <form className='form-login' onSubmit={handleSubmit}>
            <label>
                Username
                <input
                placeholder="username"
                onChange={(e)=>{setUsername(e.target.value)}}
                value={username}
                />
            </label>
            <label>
                Password
                <input
                type="password"
                placeholder="password"
                onChange={(e)=>{setPassword(e.target.value)}}
                value={password}
                />
            </label>
            <div>
                {error?<span className="span-error-login">{error.message}</span>:""}
            </div>
            <button className = "form-login-btn" disabled={isLogin}>
                Login
            </button>
        </form>
        </div>
    )
}