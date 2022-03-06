import React, { useState } from 'react';
import "./signIn.css"


export default function SingIn(props){

    return <div>
        <button  className="btn-singin" disabled={props.isSingninUp | props.isSingninIn} onClick={props.handleSignIn}>
                Sign In
        </button>
            
    </div>
}