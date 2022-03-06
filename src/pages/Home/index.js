import React, { useState } from 'react';
import {useLocation} from "wouter"
import SingIn from '../../components/SignIn';
import SingUp from '../../components/SignUp';
import './home.css'


export default function HomePage(){
    const [isSingninUp, setIsSingninUp]= useState(false)
    const [isSingninIn, setIsSingninIn]= useState(false)
    const [, navigate] = useLocation()

    const handleSignIn = () =>{
        setIsSingninIn(true)
        navigate('/login')
    }
    const handleSignUp = () =>{
        setIsSingninUp(true)
        navigate('/register')
    }
    return <div>
    <div className='title'>
        <h>Welcome</h>
    </div>
    
    <div className='home'>
                
        <SingUp handleSignUp={handleSignUp} isSingninUp={isSingninUp} isSingninIn={isSingninIn}/>
        <SingIn handleSignIn={handleSignIn} isSingninUp={isSingninUp} isSingninIn={isSingninIn}/>
            
    </div>
    </div>
}