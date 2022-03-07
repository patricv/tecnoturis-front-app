import React from 'react';
import "./signUp.css"


export default function SingUp(props) {

    return <div>

        <button className="btn-register" disabled={props.isSingninUp | props.isSingninIn} onClick={props.handleSignUp}>
            Sign Up
        </button>

    </div>
}