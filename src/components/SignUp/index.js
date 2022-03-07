import React, { useState } from 'react';
import { useLocation } from "wouter"
import "./signUp.css"


export default function SingUp(props) {
    const [, navigate] = useLocation()

    return <div>

        <button className="btn-register" disabled={props.isSingninUp | props.isSingninIn} onClick={props.handleSignUp}>
            Sign Up
        </button>

    </div>
}