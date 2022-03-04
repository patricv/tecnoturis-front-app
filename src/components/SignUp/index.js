import React, { useState } from 'react';
import {useLocation} from "wouter"


export default function SingUp(props){
    const [, navigate] = useLocation()

    return <div>
                
        <button disabled={props.isSingninUp | props.isSingninIn} onClick={props.handleSignUp}>
                Sign Up
        </button>
            
    </div>
}