import React, { useState } from 'react';
import "./signIn.css"


export default function SingIn(props){

    return <div>
        <button disabled={props.isSingninUp | props.isSingninIn} onClick={props.handleSignIn}>
                Sign in
        </button>
            
    </div>
}