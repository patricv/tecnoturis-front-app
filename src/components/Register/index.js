import React, { useState, useEffect } from "react";
import './register.css'
import register from "../../services/register";
import { useLocation } from "wouter";
import './register.css'


export default function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isRegistered, setIsRegistered] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState({})
    const [, navigate] = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError({})
        register(username, password).then(data => {
            setIsRegistered(true)
            setIsSubmitting(true)
            navigate('/login')
        }).catch(error => {
            setError(error)
        })
    }

    return (
        <div>
            <div className='title'>
                <h>Sing Up</h>
            </div>
            <form className='form-register' onSubmit={handleSubmit}>
                <label>
                    Username
                    <input
                        placeholder="username"
                        onChange={(e) => { setUsername(e.target.value) }}
                        value={username}
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        placeholder="password"
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={password}
                    />
                </label>
                <div>
                    {error ? <span className="span-error-register">{error.message}</span> : ""}
                </div>
                <button className="form-register-btn" disabled={isSubmitting}>
                    Sign Up
                </button>
            </form>
        </div>
    )
}