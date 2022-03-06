import React, {useState, useEffect} from "react";
import './register.css'
import register from "../../services/register";
import { useLocation } from "wouter";


export default function Register(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isRegistered, setIsRegistered] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState({})
    const [,navigate] = useLocation()

    const handleSubmit = (e)=>{
        e.preventDefault()
        setError({})
        register(username, password).then(data => {
            setIsRegistered(true)
            setIsSubmitting(true)
            navigate('/login')
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
            <button disabled={isSubmitting}>
                Register
            </button>
        </form>
        </>
    )
}